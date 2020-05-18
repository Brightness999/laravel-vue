<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CampaignsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	$campaign = new \App\Campaign();
    	$campaign->name = 'test campaign';
    	$campaign->save();
    	
		$campaign = new \App\Campaign();
		$campaign->name = 'test campaign2';
		$campaign->save();
    }
}
