<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class InvitationSlug extends Model
{
    protected $table = 'invitation_slug';
    protected $fillable = ['slug', 'user_id', 'email'];

    /**
     * The key column that can be use for search, implement here for route binding
     *
     * @return string
     */
    public function getRouteKeyName()
    {
        return 'slug';
    }

    /**
     * The related user model linked with foriegn key
     *
     * @var array
     */
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
