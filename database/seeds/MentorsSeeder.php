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
		$hr = new \App\Mentor();
		$hr->user_id = 1;
		$hr->mentor_id = 5;
		$hr->save();
    }
}
