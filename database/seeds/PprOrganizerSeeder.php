<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PprOrganizerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	DB::table('ppr_organizers')->insert([
    		[
    		    'ppr_id' => 1,
                'user_id' => 1
	        ],
		    [
	    	    'ppr_id' => 2,
                'user_id' => 1
	    	]
        ]);
    }
}
