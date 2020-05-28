<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		$user = new \App\User();
		$user->full_name = 'User user';
		$user->email = 'user@gmail.com';
		$user->password = bcrypt('123123123');
		$user->campaign_id = 1;
		$user->department_id = 1;
		$user->position_id = 1;
		$user->save();

		$user = new \App\User();
		$user->full_name = 'User user2';
		$user->email = 'user2@gmail.com';
		$user->password = bcrypt('123123123');
		$user->campaign_id = 1;
		$user->department_id = 2;
		$user->position_id = 2;
		$user->save();

		$user = new \App\User();
		$user->full_name = 'Hr hr';
		$user->email = 'hr@gmail.com';
		$user->assignRole(\App\Role::HR_ROLE);
		$user->password = bcrypt('123123123');
		$user->campaign_id = 1;
		$user->save();

		$user = new \App\User();
		$user->full_name = 'Hr hr2';
		$user->email = 'hr2@gmail.com';
		$user->assignRole(\App\Role::HR_ROLE);
		$user->password = bcrypt('123123123');
		$user->campaign_id = 1;
		$user->save();

		$user = new \App\User();
		$user->full_name = 'Mentor mentor';
		$user->email = 'mentor@gmail.com';
		$user->password = bcrypt('123123123');
		$user->campaign_id = 1;
		$user->assignRole(\App\Role::MENTOR_ROLE);
		$user->department_id = 3;
		$user->position_id = 3;
		$user->save();

		$user = new \App\User();
		$user->full_name = 'Mentor mentor';
		$user->email = 'mentor2@gmail.com';
		$user->password = bcrypt('123123123');
		$user->campaign_id = 1;
		$user->assignRole(\App\Role::MENTOR_ROLE);
		$user->save();

		$user = new \App\User();
		$user->full_name = 'Admin admin';
		$user->email = 'admin@gmail.com';
		$user->assignRole(\App\Role::ADMIN_ROLE);
		$user->mentor_id = 5;
		$user->hr_id = 3;
		$user->password = bcrypt('123123123');
		$user->campaign_id = 1;
		$user->save();

		$user = new \App\User();
		$user->full_name = 'Hr another company';
		$user->email = 'hr34@gmail.com';
		$user->assignRole(\App\Role::HR_ROLE);
		$user->password = bcrypt('123123123');
		$user->campaign_id = 2;
		$user->save();

		$user = new \App\User();
		$user->full_name = 'Hr + mentor';
		$user->email = 'hr3cccc4@gmail.com';
		$user->assignRole(\App\Role::HR_ROLE);
		$user->assignRole(\App\Role::MENTOR_ROLE);
		$user->password = bcrypt('123123123');
		$user->campaign_id = 1;
		$user->save();
			
	    User::all()->each(function(User $user) {
	    	$userHelper = new \App\Helpers\UserHelper();
		    $userHelper->createUserAvatar($user);
	    });
    }
}
