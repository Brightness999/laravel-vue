<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PprParticipantsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	DB::table('ppr_participants')->insert([
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
