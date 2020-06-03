<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
	public $timestamps = false;

    const HR_DEPARTMENT          = 'Hr';
    const SALES_DEPARTMENT       = 'Sales';
    const FINANCE_DEPARTMENT     = 'Finance';
    const DEVELOPMENT_DEPARTMENT = 'Development';
    const MANAGEMENT_DEPARTMENT  = 'Management';
    
    const DEPARTMENTS = [self::HR_DEPARTMENT, self::SALES_DEPARTMENT, self::FINANCE_DEPARTMENT, self::DEVELOPMENT_DEPARTMENT];
    
    /**
	 * Get the campaign of user.
	 */
	public function users()
	{
		return $this->hasMany('App\User');
	}
}
