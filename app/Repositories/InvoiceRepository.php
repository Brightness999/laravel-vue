<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\Invoice;

/**
 * Class InvoiceRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class InvoiceRepository extends BaseRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Invoice::class;
    }

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }

	/**
	 * @param int $usersAmount
	 */
    public function generatePriceForAmountOfUsers($usersAmount)
    {
    	return $usersAmount * Invoice::USER_PRICE;
    }

	/**
	 * @param $campaignId
	 */
    public function getCampaignInvoices($campaignId)
    {
    	return $this->model->where('campaign_id', $campaignId)->get();
    }
    
}
