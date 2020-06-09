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
    protected $guard_name = 'api';
    
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
	 * Get user hrs.
	 * 
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
	 */
	public function hrs()
	{
		return $this->belongsToMany('App\User', 'hrs', 'user_id', 'hr_id');
	}
	
	/**
	 * Get user mentors.
	 * 
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
	 */
	public function mentors()
	{
		return $this->belongsToMany('App\User', 'mentors', 'user_id', 'mentor_id');
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
