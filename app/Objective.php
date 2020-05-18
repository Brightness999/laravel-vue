<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Objective extends Model
{
	const STATUS_COMPLETED   = 'Completed';
	const STATUS_IN_PROGRESS = 'In progress';
	const STATUS_IN_REVIEW   = 'Waiting for review';
	
	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = [
		'name',
		'goal_id',
		'status'
	];
	
	/**
	 * Get the user of objective.
	 */
	public function goal()
	{
		return $this->belongsTo('App\Goal');
	}
}
