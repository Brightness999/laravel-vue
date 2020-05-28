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

	
    public function handle($request, Closure $next)
    {
    	$currentUser = auth()->user();
    	$userToGet   = $this->userRepository->find($request->id);
    	
        if ($currentUser->campaign_id !== $userToGet->campaign_id ||
	        $userToGet->mentor_id !== $currentUser->id ||
	        $userToGet->hr_id !== $currentUser->id || 
	        !$currentUser->hasRole(Role::ADMIN_ROLE)
        ) {
            abort(403, 'Access denied');
        }
        
        return $next($request);
    }
}
