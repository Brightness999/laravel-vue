<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

/**
 * Class InvitationSlug.
 *
 * @package namespace App\Entities;
 */
class InvitationSlug extends Model implements Transformable
{
    use TransformableTrait;

    protected $table = 'invitation_slug';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['slug', 'user_id', 'email'];

    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }

}
