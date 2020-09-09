<?php

namespace App\Repositories;

use App\Role;
use Illuminate\Support\Collection;
use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Criteria\RequestCriteria;
use App\User;

/**
 * Class UserRepositoryEloquent.
 *
 * @package namespace App\Repositories;
 */
class UserRepository extends BaseRepository
{
    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model()
    {
        return User::class;
    }

    /**
     * Boot up the repository, pushing criteria
     */
    public function boot()
    {
        $this->pushCriteria(app(RequestCriteria::class));
    }

	/**
	 * Get users depending on role.
	 *
	 * @return Collection
	 *
	 * @throws \Exception
	 */
	public function getUsersDependingOnRoleExcludingSelf()
	{
		$currentUser = auth()->user();

		if ($currentUser->hasRole(Role::ADMIN_ROLE)) {
			return $this->all()->where('campaign_id', $currentUser->campaign_id)->whereNotIn('id', $currentUser->id);
		}

		if ($currentUser->hasRole(Role::MENTOR_ROLE)) {
			return $this->all()->where('campaign_id', $currentUser->campaign_id)->where('mentor_id', $currentUser->id)->whereNotIn('id', $currentUser->id);
		}

		if ($currentUser->hasRole(Role::HR_ROLE)) {
			return $this->all()->where('campaign_id', $currentUser->campaign_id)->where('hr_id', $currentUser->id)->whereNotIn('id', $currentUser->id);
		}
		
		return new Collection();
	}

	/**
	 * Get all hrs of a campaign.
	 *
	 * @param $campaign_id
	 * 
	 * @return UserRepository
	 */
	public function getAllHrs($campaign_id)
	{
		return $this->whereHas('roles', function($query) use ($campaign_id) {
			$query->where('name', Role::HR_ROLE);
			$query->where('campaign_id', $campaign_id);
		});
	}


	/**
	 * Get all mentors of a campaign.
	 *
	 * @param $campaign_id
	 * 
	 * @return UserRepository
	 */
	public function getAllMentors($campaign_id)
	{
		return $this->whereHas('roles', function($query) use ($campaign_id) {
			$query->where('name', Role::MENTOR_ROLE);
			$query->where('campaign_id', $campaign_id);
		});
	}

	/**
	 * Get user hr.
	 *
	 * @param $id
	 *
	 * @return User | null
	 */
	public function getUserHr($id)
	{
		$hr = $this->find($id)->hr;

		return $hr ?? null;
	}

	/**
	 * Get user mentor.
	 *
	 * @param $id
	 *
	 * @return User | null
	 */
	public function getUserMentor($id)
	{
		$mentor = $this->find($id)->mentor;

		return $mentor ?? null;
	}

    /**
     * Get user by service id.
     *
     * @param $serviceId
     *
     * @return User | null
     */
    public function getUserBy($name, $value)
    {
        $user = $this->where($name, $value)->first();

        return $user ?? null;
    }


	/**
	 * @param $id
	 * @param array $roles
	 */
	public function setRoles($id, array $roles)
	{
		$userToUpdate = $this->find($id);
		$userToUpdate->roles()->detach();

		foreach ($roles as $role) {
			$userToUpdate->assignRole($role);
		}
	}

	/**
	 * @param $id
	 * @param $hrId
	 */
	public function setHr($id, $hrId)
	{
		$userForUpdate = $this->find($id);
		$userForUpdate->hr_id = $this->find($hrId)->id;
		$userForUpdate->save();
	}

	/**
	 * @param $id
	 * @param $hrId
	 */
	public function setHrs($id, $hrIds) : void
	{
		$userForUpdate = $this->find($id);
		$userForUpdate->hrs()->sync($hrIds);
	}

	/**
	 * @param $id
	 * @param $mentorId
	 */
	public function setMentor($id, $mentorId) : void
	{
		$userForUpdate = $this->find($id);
		$userForUpdate->mentor_id = $this->find($mentorId)->id;
		$userForUpdate->save();
	}

	/**
	 * @param $id
	 * @param $hrId
	 */
	public function setMentors($id, $mentorIds)
	{
		$userForUpdate = $this->find($id);
		$userForUpdate->mentors()->sync($mentorIds);
	}

	/**
	 * @return User
	 */
	public function getUserModelAttributesForView(User $user) : User
	{
		$user->department;
		$user->position;
		$user->roles;
		$user->hrs;
		$user->mentors;
		$user->campaign;
		
		return $user;
	}

	/**
	 * @param User $user
	 * @return array
	 */
	private function getUserRoles(User $user) : array 
	{
		$userRoles = $user->roles->map(function($role) {
			return $role->name;
		});
		
		return $userRoles->toArray();
	}
}
