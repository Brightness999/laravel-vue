<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Services\Contracts\SocialiteServiceInterface;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;

class AuthController extends Controller
{
    private $socialiteService;

    public function __construct(SocialiteServiceInterface $socialiteService)
    {
        $this->socialiteService = $socialiteService;
    }

    public function SocialSignup($provider)
    {
        return response()
            ->json($this->socialiteService
                ->getRedirectUrlByProvider($provider));
    }
}
