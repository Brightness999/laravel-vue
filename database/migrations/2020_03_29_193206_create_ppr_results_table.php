<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePprResultsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ppr_results', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('ppr_id')->foreign('ppr_id')->references('id')->on('pprs')->onDelete('cascade');
            $table->integer('result_id')->foreign('result_id')->references('id')->on('results')->nullable()->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ppr_results');
    }
}
