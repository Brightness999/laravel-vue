<?php

use Illuminate\Database\Seeder;

class ObjectivesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		$objective = new \App\Objective();
		$objective->name = 'Create new confluence page';
		$objective->goal_id = 1;
		$objective->save();
		
		$objective = new \App\Objective();
		$objective->name = 'Ask feedback from client';
		$objective->goal_id = 1;
		$objective->save();
		
		$objective = new \App\Objective();
		$objective->name = 'Ask feedback from client';
		$objective->goal_id = 1;
		$objective->status = \App\Objective::STATUS_COMPLETED;
		$objective->save();
		
		$objective = new \App\Objective();
		$objective->name = 'Ask feedback from client';
		$objective->goal_id = 2;
		$objective->status = \App\Objective::STATUS_COMPLETED;
		$objective->save();
		
		$objective = new \App\Objective();
		$objective->name = 'Ask feedback from clien2t';
		$objective->goal_id = 2;
		$objective->status = \App\Objective::STATUS_COMPLETED;
		$objective->save();
		
		$objective = new \App\Objective();
		$objective->name = 'Ask feedback from clien2t';
		$objective->goal_id = 3;
		$objective->status = \App\Objective::STATUS_COMPLETED;
		$objective->save();
		
		$objective = new \App\Objective();
		$objective->name = 'Ask feedback from clien2t';
		$objective->goal_id = 3;
		$objective->save();
    }
}
