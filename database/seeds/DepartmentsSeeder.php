<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DepartmentsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
	    foreach (\App\Department::DEPARTMENTS as $department) {
		    $departmentModel = new \App\Department();
		    $departmentModel->name = $department;
		    $departmentModel->save();
		}

		
    }
}
