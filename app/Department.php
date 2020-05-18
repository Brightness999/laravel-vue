<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
	public $timestamps = false;

    const HR_DEPARTMENT          = 'HR';
    const SALES_DEPARTMENT       = 'SALES';
    const FINANCE_DEPARTMENT     = 'FINANCE';
    const DEVELOPMENT_DEPARTMENT = 'DEVELOPMENT';
    const MANAGEMENT_DEPARTMENT  = 'MANAGEMENT';


    const DEPARTMENTS = [self::HR_DEPARTMENT, self::SALES_DEPARTMENT, self::FINANCE_DEPARTMENT, self::DEVELOPMENT_DEPARTMENT];
    
    /**
	 * Get the campaign of user.
	 */
	public function users()
	{
		return $this->hasMany('App\User');
	}
}
