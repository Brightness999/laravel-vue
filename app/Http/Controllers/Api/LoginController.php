<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\CampaignLoginRequest;
use App\Repositories\CampaignRepository;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;

class LoginController extends Controller
{
    /**
	 * @var CampaignRepository
	 */
    protected $campaignRepository;

    /**
	 * CampaignContoller constructor.
	 *
	 * @param CampaignRepsitory $CampaignRepsitory
	 */
	public function __construct(CampaignRepository $campaignRepository)
	{
	    $this->campaignRepository = $campaignRepository;
    }
    
    public function login(CampaignLoginRequest $request) 
    {
        $user = User::where('email', $request->email)->first();

        if ($user && $user->campaign_id) {
            $token = JWTAuth::fromUser($user);
        }
        else {
            $campaign = $this->campaignRepository->create([
                'name' => $request->campaign
            ]);
            $user = User::create([
                'email' => $request->email,
                'full_name' => $request->full_name,
                'campaign_id' => $campaign->id,
                'password' => Hash::make($request->email.$request->full_name)
            ]);
            $token = JWTAuth::fromUser($user);
        }

        return response()->json([
            'access_token' => $token,
            'user' => $user
        ], 200);
    }
}
