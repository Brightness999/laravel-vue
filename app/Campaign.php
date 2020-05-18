<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Campaign extends Model
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
	 * Get the campaign of user.
	 */
	public function users()
	{
		return $this->hasMany('App\User');
	}
	
	/**
	 * Get the invoices of the company.
	 */
	public function invoices()
	{
		return $this->hasMany('App\Invoices');
	}
}
