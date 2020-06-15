<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
	public $timestamps = false;
	
	const SALARY_INCREASE     = 'salary increase';
	const POSITION_UPGRADE    = 'position upgrade';
	const GOALS_NOT_ACHIEVED  = 'goals not achieved';
}
