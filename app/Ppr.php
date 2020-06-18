<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ppr extends Model
{
	public    $timestamps = true;
	protected $dates = ['created_at', 'updated_at', 'deleted_at'];
    
	/**
	 * Get the user of ppr.
	 */
	public function campaign()
	{
		return $this->belongsTo('App\User');
	}
	
	/**
	 * Get the results of ppr.
	 */
	public function results()
	{
		return $this->belongsToMany('App\Result', 'results');
	}
	
	/**
	 * Get the organizers of ppr.
	 */
	public function organizers()
	{
		return $this->belongsToMany('App\Organizers', 'organizers');
	}
}
