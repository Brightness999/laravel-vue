<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use Notifiable;
	use HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'full_name', 'service_id', 'email', 'password', 'hr_id', 'mentor_id', 'campaign_id',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

	/**
	 * Get mentor
	 *
	 * @return \Illuminate\Database\Eloquent\Relations\belongsTo
	 */
	public function mentor()
	{
		return $this->belongsTo(self::class, 'mentor_id', 'id');
	}

	/**
	 * Get user HR People Manager
	 *
	 * @return \Illuminate\Database\Eloquent\Relations\belongsTo
	 */
	public function hr()
	{
		return $this->belongsTo(self::class, 'hr_id', 'id');
	}

	/**
	 * Get the campaign of user.
	 */
	public function campaign()
	{
		return $this->belongsTo('App\Campaign');
	}
	
	/**
	 * Get the department of user.
	 */
	public function department()
	{
		return $this->belongsTo('App\Department');
	}

	/**
	 * Get the goal of user.
	 */
	public function goals()
	{
		return $this->hasMany('App\Goal');
	}

}
