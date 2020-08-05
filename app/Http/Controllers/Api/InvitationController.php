<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\InvitationSlug;
use App\Notifications\InviteNotification;
use App\Repositories\InvitationSlugRepository;
use App\User;
use Illuminate\Support\Facades\Notification;

class InvitationController extends Controller
{

    /**
     * @var InvitationSlugRepository
     */
    protected $repository;

    /**
	 * InvitationController constructor.
	 *
	 * @param InvitationSlugRepository $InvitationSlugRepository
     */
    public function __construct(InvitationSlugRepository $repository){
        $this->repository = $repository;
    }

    /**
     * Store a newly created resource in storage.
     * Emailed link to user so that he can join the campaign he is invited
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request) :void
    {
        $user = auth()->user();
        $emails = $request->emails;

        foreach($emails as $email) {
            $inviation_slug = $this->repository->create([
                'slug' => 'spacegoals'.time().$user->id,
                'user_id' => $user->id,
                'email' => $email
            ]);
            Notification::route('mail', $email)->notify(new InviteNotification($user,$inviation_slug));
        }
    }
}
