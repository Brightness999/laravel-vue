<?php


namespace App\Services;


use App\Helpers\SocialiteHelper;
use App\InvitationSlug;
use App\Repositories\InvitationSlugRepository;
use App\Repositories\UserRepository;
use App\Services\Contracts\SocialiteServiceInterface;
use App\User;
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
     * 
     */
    public function __construct(){
        $this->user_repository = app(UserRepository::class);
        $this->invitation_slug_repository = app(InvitationSlugRepository::class);
    }

    public function getRedirectUrlByProvider($provider): array
    {
        if(isset($_REQUEST['slug'])){
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
                
                if($user->campaign_id) {
                    return SocialiteHelper::compareUserWithSocialite($user, $userSocial)
                    && $user->createToken()->save()
                        ? $this->prepareSuccessResult($user)
                        : $this->prepareErrorResult();
                }
                else {
                    return SocialiteHelper::compareUserWithSocialite($user, $userSocial)
                    && $user->createToken()->save()
                        ? $this->prepareCompanyResult($user)
                        : $this->prepareErrorResult(); 
                }
            } else {
                $user = $this->user_repository->create([
                    'email' => $userSocial->email,
                    'full_name' => $userSocial->name,
                    'password' => Hash::make($userSocial->email . $userSocial->id),
                    'api_token' => Str::random(40)
                ]);
                //$user = New User([], $userSocial);
                if(isset($_REQUEST['state'])) {
                    $campaign_id = $this->invitation_slug_repository->findByField('slug',$_REQUEST['state'])->first()->user->campaign_id;
                    $user->campaign_id = $campaign_id;

                    return $user->save()
                        ? $this->prepareSuccessResult($user)
                        : $this->prepareErrorResult();
                }
                return $user->save()
                    ? $this->prepareCompanyResult($user)
                    : $this->prepareErrorResult();
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
            'redirect_url' => '/apps/goals/all'
        ]);
    }

    private function prepareCompanyResult(User $user): array
    {
        return $this->makeAuthenticationCookie([
            'access_token' => JWTAuth::fromUser($user),
            'user' => json_encode($user),
            'company' => 1,
            'redirect_url' => '/pages/login'
        ]);
    }
}