<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Spatie\Permission\Traits\HasRoles;
use Laravel\Passport\HasApiTokens;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable, HasRoles, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'full_name', 'service_id', 'email', 'password', 'hr_id', 'mentor_id', 'campaign_id', 'last_ppr_date'
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
	 * Get the department of user.
	 */
	public function position()
	{
		return $this->belongsTo('App\Position');
	}

	/**
	 * Get the goal of user.
	 */
	public function goals()
	{
		return $this->hasMany('App\Goal');
	}
	
	/**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

}
