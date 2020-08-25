<?php
namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use App\User;

class AuthController extends Controller
{
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        $user = new User([
            'full_name' => $request->name,
            'email'     => $request->email,
            'password'  => bcrypt($request->password),
            'service_id' => 'tets'

        ]);
        $user->save();
        
        return response()->json('User is created', 201);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
	public function login(Request $request)
	{
		$request->validate([
			'email' => 'required|string|email',
			'password' => 'required|string',
		]);
		
		$credentials = request(['email', 'password']);
		
		if (!$token = auth()->attempt($credentials)) {
			return response()->json('Credentials are not correct.', 401);
		}
		
		$expiresAt = auth()->factory()->getTTL() * 108000;
		
		if ($request->remember_me) {
			$expiresAt = auth()->factory()->getTTL() * 600000;
		}

		return response()->json([
			'accessToken' => $token,
			'token_type'  => 'Bearer',
			'expires_at'  => $expiresAt,
			'userData'    => ['email' => 'test@gmail.com', 'avatar' => 'test']
		]);
	}

	/**
	 * Logout user (Revoke the token)
	 *
	 * @return [string] message
	 */
	public function logout(Request $request)
	{
		$request->user()->token()->revoke();
		
		return response()->json([
			'message' => 'Successfully logged out'
		]);
	}

	/**
	 * Get the authenticated User
	 *
	 * @return [json] user object
	 */
	public function user(Request $request)
	{
		return response()->json($request->user());
	}
	
	/**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }
}