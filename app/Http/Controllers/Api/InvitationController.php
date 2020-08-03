<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\InvitationSlug;
use App\Notifications\InviteNotification;
use App\User;
use Illuminate\Support\Facades\Notification;

class InvitationController extends Controller
{
    public function store(Request $request)
    {
        $user = auth()->user();
        $emails = $request->emails;
        foreach($emails as $email) {
            $inviation_slug = InvitationSlug::create([
                'slug' => 'spacegoals'.time().$user->id,
                'user_id' => $user->id,
                'email' => $email
            ]);
            Notification::route('mail', $email)->notify(new InviteNotification($user,$inviation_slug));
        }
        return $request->all();
    }

    public function show(InvitationSlug $slug)
    {
        $user = User::find($slug->user_id);
        session_start();
        $_SESSION['campaign_id'] = $user->campaign_id;
        return redirect('/pages/login');
    }
}
