<?php

namespace App\Repositories;

use App\Invite;
use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;

/**
 * Interface InviteRepository.
 *
 * @package namespace App\Repositories;
 */
class InviteRepository extends BaseRepository
{
     /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return Invite::class;
    }

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }

    /**
     * Get invite by token.
     *
     * @param $token
     *
     * @return Invite | null
     */
    public function getInviteByToken($token)
    {
        $invite = $this->where('token',$token)->first();;

        return $invite ?? null;
    }
}
