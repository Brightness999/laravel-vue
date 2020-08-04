<?php


namespace App\Services;


use App\Helpers\SocialiteHelper;
use App\InvitationSlug;
use App\Services\Contracts\SocialiteServiceInterface;
use App\User;
use Illuminate\Support\Facades\Log;
use Laravel\Socialite\Facades\Socialite;
use Tymon\JWTAuth\Facades\JWTAuth;

class SocialiteService implements SocialiteServiceInterface
{
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
        Log::error(['error' => $_REQUEST]);
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
                $user = New User([], $userSocial);
                if(isset($_REQUEST['state'])) {
                    $campaign_id = InvitationSlug::where('slug',$_REQUEST['state'])->first()->user->campaign_id;
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