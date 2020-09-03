<?php

namespace App\Http\Controllers\Api;

use App\Repositories\RoleRepository;
use App\Repositories\UserRepository;
use App\Role;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Validation\ValidationException;


class UserRolesController extends Controller
{
    /**
     * @var UserRepository
     */
    public $userRepository;
    
    /**
     * @var RoleRepository
     */
    public $roleRepository;

    /**
     * UserRolesController constructor.
     * @param UserRepository $userRepository
     * @param RoleRepository $roleRepository
     */
    public function __construct(UserRepository $userRepository, RoleRepository $roleRepository)
    {
        $this->userRepository = $userRepository;
        $this->roleRepository = $roleRepository;
    }

    /**
     * @param $userId
     * @return \Illuminate\Http\JsonResponse
     */
    public function index($userId): JsonResponse 
    {
        $userRoles = $this->userRepository->find($userId)->roles;
        
        return response()->json($userRoles);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function store($userId, Request $request): JsonResponse
    {
        try {
             $request->validate([
                'name' => 'required'
            ]);
        } catch (ValidationException $e) {
            return response()->json($e->errors(), 400);
        }
       
        $roleToAdd = $this->roleRepository->findByField('name', $request->name)->first();
        
        if (!$roleToAdd) {
            return response()->json('Role is not found', 404);
        }
        
        $this->userRepository->find($userId)->assignRole($roleToAdd->name);
        
        return response()->json($roleToAdd);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function show(Role $role)
    {
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function edit(Role $role)
    {
       
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Role $role)
    {
        
    }

    /**
     * @param $userId
     * @param $roleId
     * @return JsonResponse
     */
    public function destroy($userId, $roleId)
    {
        $roleToDelete = $this->roleRepository->find($roleId);
        
        if (!$roleToDelete) {
            return response()->json('Role is not found', 404);
        }
        
        $user = $this->userRepository->find($userId)->removeRole($roleToDelete->name);
        
        return response()->json($user->roles);
    }
}
