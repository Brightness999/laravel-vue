<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CampaignLoginRequest;
use App\Repositories\CampaignRepository;
use App\Repositories\UserRepository;
use App\Role;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;

class LoginController extends Controller
{
    /**
	 * @var CampaignRepository
	 */
    protected $campaignRepository, $userRepository;

    /**
	 * CampaignContoller constructor.
	 *
	 * @param CampaignRepsitory $CampaignRepsitory
     * @param UserRepository $userRepository
	 */
	public function __construct(CampaignRepository $campaignRepository, UserRepository $userRepository)
	{
        $this->campaignRepository = $campaignRepository;
        $this->userRepository = $userRepository;
    }

    /**
     * Register and login a new user.
     *
     * @param  App\Http\Requests\CampaignLoginRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function login(CampaignLoginRequest $request) 
    {
        $user = $this->userRepository->where('email', $request->email)->first();

        if ($user && $user->campaign_id) {
            $token = JWTAuth::fromUser($user);
        }
        else {
            $campaign = $this->campaignRepository->create([
                'name' => $request->campaign
            ]);
            $user = $this->userRepository->create([
                'email' => $request->email,
                'full_name' => $request->full_name,
                'campaign_id' => $campaign->id,
                'password' => Hash::make($request->email.$request->full_name)
            ]);
            $user->assignRole(Role::ADMIN_ROLE);
            $token = JWTAuth::fromUser($user);
        }

        return response()->json([
            'access_token' => $token,
            'user' => $user
        ], 200);
    }
}
