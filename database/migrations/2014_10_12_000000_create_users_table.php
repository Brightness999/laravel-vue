<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('full_name');
            $table->string('service_id')->nullable();
            $table->string('email')->unique();
            $table->string('password')->nullable();
            $table->integer('campaign_id')->foreign('campaign_id')->references('id')->on('campaigns')->nullable()->onDelete('cascade');
            $table->integer('mentor_id')->nullable()->unsigned();
            $table->integer('hr_id')->nullable()->unsigned();
            $table->string('avatar')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
