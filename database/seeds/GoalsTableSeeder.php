<?php

use Illuminate\Database\Seeder;

class GoalsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		$goal = new \App\Goal();
		$goal->name = 'Improve process in team';
		$goal->user_id = 4;
		$goal->save();
		
		$goal = new \App\Goal();
		$goal->name = 'Improve process in teama';
		$goal->user_id = 3;
		$goal->save();
		
		$goal = new \App\Goal();
		$goal->name = 'Improve process in teama';
		$goal->user_id = 5;
		$goal->save();
    }
}
