<?php

use Illuminate\Database\Seeder;
use App\User;

class MentorsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		$mentor = new \App\Mentor();
		$mentor->user_id = 1;
		$mentor->mentor_id = 5;
		$mentor->save();
    }
}
