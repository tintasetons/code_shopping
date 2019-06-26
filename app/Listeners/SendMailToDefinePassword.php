<?php

namespace CodeShopping\Listeners;

use CodeShopping\Events\UserCreatedEvent;
use CodeShopping\Models\User;


class SendMailToDefinePassword
{
    
    public function __construct()
    {
        //
    }

    
    public function handle(UserCreatedEvent $event)
    {
        /** @var User $user */
        $user = $event->getUser();
        $token = \Password::broker()->createToken($user);

        $user->sendPasswordResetNotification($token);

    }
}
