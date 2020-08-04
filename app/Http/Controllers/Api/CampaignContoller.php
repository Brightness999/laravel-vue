<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Campaign;
use App\Http\Controllers\Controller;
use App\Repositories\CampaignRepository;

class CampaignContoller extends Controller
{

    /**
	 * @var CampaignRepository
	 */
    protected $campaignRepository;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    /**
	 * UserController constructor.
	 *
	 * @param UserRepository $userRepository
	 */
	public function __construct(
		CampaignRepository $campaignRepository
	)
	{
		$this->campaignRepository = $campaignRepository;
    }
    
    public function index()
    {
        $campaigns = $this->campaignRepository->all();
        return response()->json($campaigns);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        //
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
