<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
	const USER_PRICE = 3;
	
    const STATUS_OPENED = 'opened';
    const STATUS_PAID   = 'paid';
    
    const TYPE_MONTHLY = 'monthly';
    
    protected $fillable = ['price', 'payment_date', 'active_users_count', 'status', 'campaign_id'];
	public    $timestamps = true;
	protected $dates = ['created_at', 'updated_at', 'deleted_at'];
    
	/**
	 * Get the campaign of invoice.
	 */
	public function campaign()
	{
		return $this->belongsTo('App\Campaign');
	}
}
