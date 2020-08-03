<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class InvitationSlug extends Model
{
    protected $table = 'invitation_slug';
    protected $fillable = ['slug', 'user_id', 'email'];

    public function getRouteKeyName()
    {
        return 'slug';
    }
}
