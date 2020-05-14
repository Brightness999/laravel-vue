<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class InvoicesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
		$invoice = new \App\Invoice();
		$invoice->campaign_id = 1;
		$invoice->active_users_count = 8;
		$invoice->price = 100;
		$invoice->type = \App\Invoice::TYPE_MONTHLY;
		$invoice->save();

		
    }
}
