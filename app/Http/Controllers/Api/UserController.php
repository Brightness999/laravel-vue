<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Repositories\UserRepository;
use App\User;

class UserController extends Controller
{
	/**
	 * @var UserRepository
	 */
	protected $userRepository;

	/**
	 * UserController constructor.
	 *
	 * @param UserRepository $userRepository
	 */
	public function __construct(
		UserRepository $userRepository
	)
	{
		$this->userRepository = $userRepository;
	}

	/**
	 * @return \Illuminate\Http\JsonResponse
	 * @throws \Exception
	 */
	public function index()
	{
		$users = $this->userRepository->getUsersDependingOnRoleExcludingSelf();
		
		if ($users) {
			$users = $users->map(function ($user) {
				$userForRender = $this->userRepository->getUserModelAttributesForView($user);
				
				return $userForRender;
			});
			$users = array_values($users->toArray());
		} else {
			$users = [];
		}
		
		return response()->json($users);
	}

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = $this->userRepository->find($id);
        $userForRender = $this->userRepository->getUserModelAttributesForView($user);
        
        return response()->json($userForRender);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = $this->userRepository->update($request->all(), $id);
        return $user;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
