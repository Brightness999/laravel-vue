<?php

use Illuminate\Http\Request;
use App\Http\Controllers\Api;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//auth:api TBD
Route::get('/user', function (Request $request) {
	return $request->user();
});

Route::group([
		'middleware' => 'jwt.auth'
    ], function() {
	Route::resource('/user-management/users', 'UserController');

});

Route::group([
    'prefix' => 'auth',
], function () {
    Route::post('login', 'AuthController@login');
    Route::post('register', 'AuthController@register');
  
    Route::group([
		'middleware' => 'jwt.auth'
    ], function() {
        Route::get('logout', 'AuthController@logout');
        Route::get('user', 'AuthController@user');
        Route::post('me', 'AuthController@me');
    });
});