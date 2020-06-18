<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Repositories\GoalRepository;
use App\Repositories\ObjectiveRepository;
use App\Http\Controllers\Controller;

class GoalController extends Controller
{
    /**
     * @var GoalRepository
     */
    protected $goalRepository;

    /**
     * @var ObjectiveRepository
     */
    protected $objectiveRepository;

    /**
	 * UserController constructor.
	 *
	 * @param GoalRepository $goalRepository
	 * @param ObjectiveRepository $objectiveRepository
	 */
	public function __construct(GoalRepository $goalRepository, ObjectiveRepository $objectiveRepository)
	{
		$this->goalRepository      = $goalRepository;
		$this->objectiveRepository = $objectiveRepository;
	}
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $goals = $this->goalRepository->all();
        foreach ($goals as $key => $goal) {
             $objectives = [];
            foreach ($goal->objectives()->get()->pluck('name') as $val) {
                $objectives[] = (object) ['name' => $val, 'isTrashed' => false];
            }
            $goals[$key]->objectives = $objectives;
        }

        return response()->json($goals);
    }

    /**
	 * @param Request $request
	 * @return mixed
	 */
	public function save(Request $request) {
	    $encodedData = $request->all();

	    try {
            $goal = $this->goalRepository->create([
                'user_id' => $request->user()->id,
                'name'    => $encodedData['task']['title']
            ]);
            if ($encodedData['task']['list']) {
                foreach ($encodedData['task']['list'] as $objective) {
                    if ($objective['isTrashed'] == false)
                        $this->objectiveRepository->create([
                            'name'    => $objective['name'],
                            'goal_id' => $goal->id
                        ]);
                }
            }

            $goal->objectives = $encodedData['task']['list'];

            return $goal;

	    } catch (\Exception $exception) {
			//something is here
		}
    }

    /**
	 * @param Request $request
     *  @param  int  $id
     *
	 * @return mixed
	 */
	public function update(Request $request, $id) {
	    $encodedData = $request->all();

        try {
            $goal = $this->goalRepository->update([
                'user_id' => $request->user()->id,
                'name'    => $encodedData['task']['title']
            ], $id);
            $this->objectiveRepository->deleteWhere(['goal_id' => $goal->id]);
            if ($encodedData['task']['list']) {
                foreach ($encodedData['task']['list'] as $objective) {
                    if ($objective['isTrashed'] == false)
                        $this->objectiveRepository->create([
                            'name'    => $objective['name'],
                            'goal_id' => $goal->id
                        ]);
                }
            }
	    } catch (\Exception $exception) {
			//something is here
		}
    }
}
