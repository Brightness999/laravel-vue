<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Goal extends Model
{
	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [
		'name'
	];
	
	/**
	 * Get the user of goal.
	 */
	public function user()
	{
		return $this->belongsTo('App\User');
	}
	
	/**
	 * Get the objectives of goal.
	 */
	public function objectives()
	{
		return $this->hasMany('App\Objective');
	}
}
