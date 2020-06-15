<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ResultsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		$result = new \App\Result();
		$result->name = \App\Result::SALARY_INCREASE;
		$result->save();
		
		$result = new \App\Result();
		$result->name = \App\Result::GOALS_NOT_ACHIEVED;
		$result->save();

		$result = new \App\Result();
		$result->name = \App\Result::POSITION_UPGRADE;
		$result->save();
    }
}
