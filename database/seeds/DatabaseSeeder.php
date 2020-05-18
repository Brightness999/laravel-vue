<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
    	$this->call(DepartmentsSeeder::class);
    	$this->call(PositionsSeeder::class);
		$this->call(RolesPermissionsSeeder::class);
		$this->call(CampaignsSeeder::class);
        $this->call(UsersSeeder::class);
        $this->call(GoalsTableSeeder::class);
        $this->call(ObjectivesTableSeeder::class);
        $this->call(InvoicesSeeder::class);
    }
}
