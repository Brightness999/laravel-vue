<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInvoicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->increments('id');
	        $table->integer('campaign_id')->foreign()->references('id')->on('campaigns')->onDelete('cascade');
	        $table->timestamp('payment_date')->nullable();
	        $table->integer('price');
	        $table->integer('active_users_count');
	        $table->string('type')->default(\App\Invoice::TYPE_MONTHLY);
	        $table->string('status')->default(\App\Invoice::STATUS_OPENED);
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
        Schema::dropIfExists('invoices');
    }
}
