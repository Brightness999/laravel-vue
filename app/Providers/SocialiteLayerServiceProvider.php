<?php

namespace App\Providers;

use App\Repositories\InvitationSlugRepository;
use App\Repositories\UserRepository;
use App\Services\SocialiteService;
use Illuminate\Foundation\Application;
use Illuminate\Support\ServiceProvider;

class SocialiteLayerServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {

    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('App\Services\SocialiteService', function(Application $app){
            return new SocialiteService(app(UserRepository::class), app(InvitationSlugRepository::class));
        });
        $this->app->bind(
            'App\Services\Contracts\SocialiteServiceInterface',
            'App\Services\SocialiteService'
        );
    }
}