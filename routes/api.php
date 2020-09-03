<?php

use Illuminate\Http\Request;

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

Route::get('campaigns', 'CampaignContoller@index');
Route::get('positions', 'PositionController@index');

Route::group([
		'middleware' => 'jwt.auth'
    ], function() {
    Route::resource('users', 'UserController');
    Route::resource('users.goals', 'GoalController');
    Route::resource('users.roles', 'UserRolesController');
    Route::post('/invite','InvitationController@store');
    Route::resource('hrs', 'HrsController');
    Route::resource('roles', 'RolesController');
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
