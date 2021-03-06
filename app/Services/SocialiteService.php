<?php


namespace App\Services;


use App\Helpers\SocialiteHelper;
use App\InvitationSlug;
use App\Repositories\InvitationSlugRepository;
use App\Repositories\UserRepository;
use App\Services\Contracts\SocialiteServiceInterface;
use App\User;
use App\Role;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Laravel\Socialite\Facades\Socialite;
use Tymon\JWTAuth\Facades\JWTAuth;

class SocialiteService implements SocialiteServiceInterface
{
    /**
     * @var invitation_slug_repository
     * @var user_repository
     */
    protected $user_repository, $invitation_slug_repository;

    /**
	 * SocialiteService constructor.
     * @param user_repository, invitation_slug_repository
     */
    public function __construct(UserRepository $user_repository, InvitationSlugRepository $invitation_slug_repository){
        $this->user_repository = $user_repository;
        $this->invitation_slug_repository = $invitation_slug_repository;
    }

    public function getRedirectUrlByProvider($provider): array
    {
        if (isset($_REQUEST['slug'])) {
            return [
                'redirectUrl' => Socialite::driver($provider)
                    ->stateless()
                    ->with(['state' => $_REQUEST['slug']])
                    ->redirect()
                    ->getTargetUrl()
            ];
        }
        return [
            'redirectUrl' => Socialite::driver($provider)
                ->stateless()
                ->redirect()
                ->getTargetUrl()
        ];
    }

    public function loginWithSocialite($provider): array
    {
        $userSocial = Socialite::driver($provider)->stateless()->user();
        if (SocialiteHelper::isSocialPresent($userSocial)) {
            $user = $this->searchUserByEmail($userSocial->email);

            if ($user) {
                
                if ($user->campaign_id) {
                    return $user->createToken()->save()
                        ? $this->prepareSuccessResult($user)
                        : $this->prepareErrorResult();
                }
                else {
                    return $user->createToken()->save()
                        ? $this->prepareCompanyResult($user)
                        : $this->prepareErrorResult(); 
                }
            } else {
                $user = [
                    'email' => $userSocial->email,
                    'full_name' => $userSocial->name,
                    'api_token' => Str::random(40),
                    'password' => Hash::make($userSocial->email . $userSocial->id)
                ];
                if (isset($_REQUEST['state'])) {
                    $user = $this->user_repository->create([
                        'email' => $userSocial->email,
                        'full_name' => $userSocial->name,
                        'password' => Hash::make($userSocial->email . $userSocial->id),
                        'api_token' => Str::random(40)
                    ]);
                    $user->assignRole(Role::USER_ROLE);
                    $campaign_id = $this->invitation_slug_repository->findByField('slug',$_REQUEST['state'])->first()->user->campaign_id;
                    $user->campaign_id = $campaign_id;

                    return $user->save()
                        ? $this->prepareSuccessResult($user)
                        : $this->prepareErrorResult();
                }
                return $this->prepareCompanyResult($user);
            }
        } else {
            return $this->prepareErrorResult();
        }
    }

    private function makeAuthenticationCookie($result)
    {
        $result['cookie'] = cookie('authentication',
            json_encode($result),
            8000,
            null,
            null,
            false,
            false
        );
        return $result;
    }

    private function searchUserByEmail($email): ?User
    {
        return User::where('email', $email)
            ->first();
    }

    private function prepareErrorResult(): array
    {
        return $this->makeAuthenticationCookie([
            'error' => 'User is unavailable. Try another social account!',
            'redirect' => '/login',
            'redirect_url' => '/#/',
        ]);
    }

    private function prepareSuccessResult(User $user): array
    {
        return $this->makeAuthenticationCookie([
            'api_token' => $user->api_token,
            'access_token' => JWTAuth::fromUser($user),
            'user' => json_encode($user),
            'redirect_url' => '/profile'
        ]);
    }

    private function prepareCompanyResult($user): array
    {
        return $this->makeAuthenticationCookie([
            'user' => json_encode($user),
            'company' => 1,
            'redirect_url' => '/pages/login'
        ]);
    }
}