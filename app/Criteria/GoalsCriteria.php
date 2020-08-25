<?php

namespace App\Criteria;

use Prettus\Repository\Contracts\CriteriaInterface;
use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Class MyCriteria.
 *
 * @package namespace App\Criteria;
 */
class GoalsCriteria implements CriteriaInterface
{
    /**
     * @var $userId
     */
    public $userId;

    /**
     * GoalsCriteria constructor.
     * @param $userId
     */
    public function __construct($userId)
    {
        $this->userId = $userId;
    }

    /**
     * Apply criteria in query repository
     *
     * @param string              $model
     * @param RepositoryInterface $repository
     *
     * @return mixed
     */
    public function apply($model, RepositoryInterface $repository)
    {
        $model = $model->where('user_id', $this->userId);
        
        return $model;
    }
}
