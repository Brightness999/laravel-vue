<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolesPermissionsSeeder extends Seeder
{
    /**
     * Run the roles and permissions seeds.
     *
     * @return void
     */
    public function run()
    {
      Role::create(['name' => \App\Role::ADMIN_ROLE]);
      Role::create(['name' => \App\Role::HR_ROLE]);
      Role::create(['name' => \App\Role::MENTOR_ROLE]);
      Role::create(['name' => \App\Role::USER_ROLE]);
    }
}
