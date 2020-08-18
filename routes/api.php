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

Route::get('campaigns', 'CampaignContoller@index');

Route::group([
		'middleware' => 'jwt.auth',
		'prefix'     => 'user-management'
    ], function() {
	Route::get('/users', 'UserController@index');
  Route::get('/users/{id}', 'UserController@show')->middleware('hasAccessToUser');
  Route::post('/users/{id}', 'UserController@update');
  Route::post('/invite','InvitationController@store');
});

Route::group([
  'middleware' => 'jwt.auth',
  ], function() {
    Route::resource('hrs', 'HrsController');
  }
);


Route::group([
		'middleware' => 'jwt.auth',
		'prefix'     => 'apps/todo'
    ], function() {
	Route::get('/goals', 'GoalController@index');
	Route::post('/goals/add', 'GoalController@save');
	Route::post('/goals/update/{id}', 'GoalController@update');
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
