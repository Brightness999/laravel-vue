<?php

namespace App\Notifications;

use App\Entities\InvitationSlug;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use App\User;

class InviteNotification extends Notification implements ShouldQueue
{
    use Queueable;

    protected $user, $slug;
    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(User $user, InvitationSlug $slug)
    {
        $this->user = $user;
        $this->slug = $slug;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->greeting('Hello')
                    ->line($this->user->full_name.' has invited to his campaign')
                    ->line('follow this link to accept invitation')
                    ->action('Accept invitation', url("/accept/".$this->slug->slug));
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
