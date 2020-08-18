<?php

namespace App\Http\Middleware;

use App\Repositories\UserRepository;
use App\Role;
use Closure;
use mysql_xdevapi\Exception;

class HasAccessToUser
{
	/**
	 * @var UserRepository
	 */
	private $userRepository;

	/**
	 * HasAccessToUser constructor.
	 * 
	 * @param UserRepository $userRepository
	 */
	public function __construct(UserRepository $userRepository)
	{
		$this->userRepository = $userRepository;
	}

	/**
	 * Check if user has access to requested user.
	 * 
	 * @param $request
	 * @param Closure $next
	 * @return mixed
	 * @throws \Symfony\Component\HttpKernel\Exception\HttpException
	 * @throws \Symfony\Component\HttpKernel\Exception\NotFoundHttpException
	 */
    public function handle($request, Closure $next)
    {
    	$currentUser = auth()->user();
    	$userToGet   = $this->userRepository->find($request->id);
    	$userMentors = $userToGet->mentors->map(function($mentor) {
    		return $mentor->id;
			})->toArray();
			return $next($request);
    	$userHrs = $userToGet->hrs->map(function($hr) {
    		return $hr->id;
			})->toArray();
			
			if($currentUser->id == $userToGet->id || ($currentUser->campaign_id == $userToGet->campaign_id && $userToGet->hasRole(ROLE::USER_ROLE))) {
				return $next($request);
			}
			
			if ($currentUser->campaign_id == $userToGet->campaign_id &&
				($currentUser->hasRole(Role::ADMIN_ROLE) || in_array($currentUser->id, $userMentors) || in_array($currentUser->id, $userHrs))
				
			) {
					return $next($request);
			}
			abort(403, 'Access denied');
    }
}
