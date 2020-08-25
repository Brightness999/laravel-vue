<?php

namespace App\Http\Controllers\Api;

use App\Helpers\ImageHelper;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use App\Repositories\CampaignRepository;
use App\Repositories\UserRepository;
use App\User;

class UserController extends Controller
{
    /**
     * @var UserRepository
     */
    protected $userRepository, $campaignRepository;

    /**
     * UserController constructor.
     *
     * @param UserRepository $userRepository
     */
    public function __construct(
        UserRepository $userRepository,
        CampaignRepository $campaignRepository
    )
    {
        $this->userRepository     = $userRepository;
        $this->campaignRepository = $campaignRepository;
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function index(Request $request)
    {
        if (isset($request['hrs_and_mentors'])) {
            $hrs     = $this->userRepository->getAllHrs()->get();
            $mentors = $this->userRepository->getAllMentors()->get();
            $users   = $mentors->concat($hrs);
        } else {
            $users = $this->userRepository->getUsersDependingOnRoleExcludingSelf();
        }

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
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user          = $this->userRepository->find($id);
        $userForRender = $this->userRepository->getUserModelAttributesForView($user);

        return response()->json($userForRender);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(UserRequest $request, $id)
    {
        $params = $request->all();

        if (isset($request['campaign_id'])) {
            $campaign              = $this->campaignRepository->create([
                'name' => $params['campaign']
            ]);
            $params['campaign_id'] = $campaign->id;
        }

        if (isset($request['hrs'])) {
            $hrs = json_decode($request['hrs']);
            $this->userRepository->setHrs($id, $hrs);
        }

        if (isset($request['mentors'])) {
            $mentors = json_decode($request['mentors']);
            $this->userRepository->setMentors($id, $mentors);
        }

        if (isset($request['new_avatar'])) {
            $file_path        = ImageHelper::uploadFile($request['new_avatar'], '/uploads/user/avatar');
            $params['avatar'] = $file_path;
        }

        $user = $this->userRepository->update($params, $id);

        return $user;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
