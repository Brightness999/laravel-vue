<?php

use Illuminate\Database\Seeder;
use App\User;
use Illuminate\Support\Facades\DB;

class HrsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	DB::table('hrs')->insert([
    		[
    		    'user_id' => 1,
                'hr_id' => 3
	        ],
		    [
	    	    'user_id' => 1,
                'hr_id' => 5
	    	]
        ]);
    }
}
