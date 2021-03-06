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
		'name','user_id', 'description', 'evaluation_criteria', 'status', 'due_date', 'priority'
	];

	/**
	 * Get the user of goal.
	 */
	public function user()
	{
		return $this->belongsTo('App\User');
	}
}
