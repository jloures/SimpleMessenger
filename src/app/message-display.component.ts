import { Component } from '@angular/core';
import { MessageService } from './message.service';

@Component({
    selector: 'message-display',
    template: ''
})

export class MessageDisplay {
    private messageService : MessageService;
    constructor(private mService: MessageService) {
        this.messageService = mService;
    }

    sendMessage(msg) {
        this.messageService.sendMessage(msg);
    }
}