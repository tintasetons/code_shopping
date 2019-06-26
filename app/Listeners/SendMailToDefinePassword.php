<?php

namespace CodeShopping\Listeners;

use CodeShopping\Events\UserCreatedEvent;

class SendMailToDefinePassword
{
    
    public function __construct()
    {
        //
    }

    
    public function handle(UserCreatedEvent $event)
    {
        echo $event->getUser()->name;
    }
}
