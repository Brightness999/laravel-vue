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
		$goal->description = 'Test goal description 1';
		$goal->evaluation_criteria = 'Test goal evaluation_criteria 1';
		$goal->status = 'In progress';
		$goal->save();
		
		$goal = new \App\Goal();
		$goal->name = 'Improve process in teama';
		$goal->user_id = 3;
		$goal->description = 'Test goal description 2';
		$goal->evaluation_criteria = 'Test goal evaluation_criteria 2';
		$goal->status = 'Done';
		$goal->save();
		
		$goal = new \App\Goal();
		$goal->name = 'Improve process in teama';
		$goal->user_id = 5;
		$goal->description = 'Test goal description 3';
		$goal->evaluation_criteria = 'Test goal evaluation_criteria 3';
		$goal->status = 'To do';
		$goal->save();
    }
}
