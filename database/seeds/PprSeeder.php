<?php

use Illuminate\Database\Seeder;
use App\User;

class PprSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		$ppr          = new \App\Ppr();
		$ppr->user_id = 1;
		$ppr->link    = 'https://teams.microsoft.com/l/meetup-eeting_ZWFiNzQyOTUtZGE0OS00NzJlLTliNTUtMWE3NDYwYjZlYThk%40thread.v2/0?context=%7b%22Tid%22%3a%221f8f841a-57bd-4a61-8f2c-aaa6507ce83b%22%2c%22Oid%22%3a%2224f5a899-1a2f-48c0-9d07-36ed11dfe35c%22%7d';
        $ppr->save();
        
		$ppr          = new \App\Ppr();
		$ppr->user_id = 1;
		$ppr->link    = 'https://teams.mccccicrosoft.com/l/meetup-eeting_ZWFiNzQyOTUtZGE0OS00NzJlLTliNTUtMWE3NDYwYjZlYThk%40thread.v2/0?context=%7b%22Tid%22%3a%221f8f841a-57bd-4a61-8f2c-aaa6507ce83b%22%2c%22Oid%22%3a%2224f5a899-1a2f-48c0-9d07-36ed11dfe35c%22%7d';
        $ppr->save();
    }
}
