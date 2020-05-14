<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Campaign;
use App\Validators\CampaignValidator;

/**
 * Class CampaignRepository.
 *
 * @package namespace App\Repositories;
 */
class CampaignRepository extends BaseRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Campaign::class;
    }
    
    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }

	/**
	 * @param $id
	 * @return int
	 */
    public function getUsersCountForCampaign($id)
    {
    	return count($this->find($id)->users);
    }
    
    /**
     * Get campaign.
     *
     * @param $name
     *
     * @return \App\Campaign | null
     */
    public function getCampaign($name)
    {
        $campaign = $this->where('name', $name)->first();

        return $campaign ?? null;
    }
}
