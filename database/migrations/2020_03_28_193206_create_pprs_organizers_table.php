<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePprsOrganizersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ppr_participants', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('ppr_id')->foreign('ppr_id')->references('id')->on('pprs')->nullable()->onDelete('cascade');
            $table->integer('user_id')->foreign('user_id')->references('id')->on('users')->nullable()->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ppr_participants');
    }
}
