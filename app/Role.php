<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends \Spatie\Permission\Models\Role
{
    const ADMIN_ROLE  = 'admin';
    const HR_ROLE     = 'hr';
    const MENTOR_ROLE = 'mentor';
    const USER_ROLE = 'user';

    const ROLES = [self::ADMIN_ROLE, self::MENTOR_ROLE, self::HR_ROLE, self::USER_ROLE];
}
