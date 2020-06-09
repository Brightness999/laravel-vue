<?php

use Illuminate\Database\Seeder;
use App\User;

class HrsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		$hr = new \App\Hr();
		$hr->user_id = 1;
		$hr->hr_id = 3;
		$hr->save();
		
		$hr = new \App\Hr();
		$hr->user_id = 1;
		$hr->hr_id = 4;
		$hr->save();
    }
}
