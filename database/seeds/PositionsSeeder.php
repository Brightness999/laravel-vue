<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PositionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
	    foreach (\App\Position::POSITIONS as $position) {
		    $positionModel = new \App\Position();
		    $positionModel->name = $position;
		    $positionModel->save();
		}

		
    }
}
