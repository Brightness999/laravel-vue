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
        $this->call(HrsSeeder::class);
        $this->call(MentorsSeeder::class);
        $this->call(ResultsSeeder::class);
        $this->call(PprSeeder::class);
        $this->call(PprResultsSeeder::class);
        $this->call(PprOrganizerSeeder::class);
    }
}
