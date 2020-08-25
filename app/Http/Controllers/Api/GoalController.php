<?php

namespace App\Http\Controllers\Api;

use App\Criteria\GoalsCriteria;
use Illuminate\Http\Request;
use App\Repositories\GoalRepository;
use App\Http\Controllers\Controller;

class GoalController extends Controller
{
    /**
     * @var GoalRepository
     */
    protected $goalRepository;

    /**
     * UserController constructor.
     *
     * @param GoalRepository $goalRepository
     */
    public function __construct(GoalRepository $goalRepository)
    {
        $this->goalRepository = $goalRepository;
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse|Request
     * @throws \Prettus\Repository\Exceptions\RepositoryException
     */
    public function index($id)
    {
        $this->goalRepository->pushCriteria(new GoalsCriteria($id));
        $goals = $this->goalRepository->all();
        
        return response()->json($goals);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function store(Request $request, $id)
    {
        $encodedData = $request->all();

        $goal = $this->goalRepository->create([
            'user_id'             => $id,
            'name'                => $encodedData['name'],
            'description'         => $encodedData['description'],
            'evaluation_criteria' => $encodedData['evaluation_criteria'],
            'status'              => $encodedData['status']
        ]);

        return response()->json($goal);
    }

    /**
     * @param Request $request
     * @param $id
     * @param $goalId
     * @return \Illuminate\Http\JsonResponse
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function update(Request $request, $id, $goalId)
    {
        $encodedData = $request->all();
        
        $goal = $this->goalRepository->update([
            'user_id'             => $id,
            'name'                => $encodedData['name'],
            'description'         => $encodedData['description'],
            'evaluation_criteria' => $encodedData['evaluation_criteria'],
            'status'              => $encodedData['status']
        ], $goalId);
        
        return response()->json($goal);
    }
    
    /**
     * @param Request $request
     * @param $id
     * @param $goalId
     * @return \Illuminate\Http\JsonResponse
     * @throws \Prettus\Validator\Exceptions\ValidatorException
     */
    public function destroy(Request $request, $id, $goalId)
    {
        $goal = $this->goalRepository->delete($goalId);
        
        return response()->json($goal);
    }
}
