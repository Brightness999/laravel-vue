<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Traits\HasRoles;
use Laravel\Passport\HasApiTokens;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Laravel\Socialite\Two\User as SocialiteUser;
use Illuminate\Support\Str;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable, HasRoles, HasApiTokens;
    protected $guard_name = 'api';
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

		public function __construct(array $attributes = [],
                                SocialiteUser $socialiteUser = null)
    {
        parent::__construct($attributes);
        $socialiteUser === null
            ?: $this->prepareUserBySocialite($socialiteUser);
    }
		
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
	 * Get the position of user.
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
	 * Get the pprs of user.
	 */
	public function pprs()
	{
		return $this->hasMany('App\Ppr');
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


		public function revokeToken(): User{
			$this->api_token = null;
			return $this;
		}

		public function createToken(): User{
			$this->api_token = Str::random(40);
			return $this;
		}

		private function prepareUserBySocialite($social): void
		{
			$this->name = $social->name;
			$this->email = $social->email;
			$this->hashPassword($social->email . $social->id);
			$this->createToken();
		}

		public function hashPassword(string $password): User{
			$this->password = Hash::make($password);
			return $this;
		}

		public function setNameAttribute($value) {
			$this->attributes['full_name'] = $value;
		}
}
