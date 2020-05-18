<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Position extends Model
{
	public $timestamps = false;

	const JUNIOR_SOFTWARE_DEVELOPER_POSITION = 'Junior software developer';
	const SOFTWARE_DEVELOPER_POSITION = 'Software developer';
	const SENIOR_SOFTWARE_DEVELOPER_POSITION = 'Senior software developer';
	const HR_POSITION = 'HR';
	const SALES_POSITION = 'Sales';
	const RECRUITER_POSITION = 'Recruiter';
	const PM_POSITION = 'PM';
	const LEAD_POSITION = 'LEAD';

	const POSITIONS = [
		self::JUNIOR_SOFTWARE_DEVELOPER_POSITION,
		self::SOFTWARE_DEVELOPER_POSITION,
		self::SENIOR_SOFTWARE_DEVELOPER_POSITION,
		self::HR_POSITION,
		self::RECRUITER_POSITION,
		self::PM_POSITION,
		self::LEAD_POSITION
	];

	/**
	 * Get the campaign of user.
	 */
	public function users()
	{
		return $this->hasMany('App\User');
	}
}
