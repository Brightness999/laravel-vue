<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PprResultsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	DB::table('ppr_results')->insert([
    		[
    		    'ppr_id' => 1,
                'result_id' => 1
	        ],
		    [
	    	    'ppr_id' => 2,
                'result_id' => 2
	    	]
        ]);
    }
}
