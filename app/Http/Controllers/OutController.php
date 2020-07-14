<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\Contracts\SocialiteServiceInterface;

class OutController extends Controller
{
    private $socialiteService;

    public function __construct(SocialiteServiceInterface $socialiteService)
    {
        $this->socialiteService = $socialiteService;
    }

    public function index($provider)
    {
        $result = $this->socialiteService->loginWithSocialite($provider);
        return redirect($result['redirect_url'])
        ->withCookie($result['cookie']);
    }
}
