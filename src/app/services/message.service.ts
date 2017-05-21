import { Injectable } from '@angular/core';

import { Message } from '../message';

import { MESSAGES } from './mock-messages';

@Injectable()
export class MessageService {
    private messages:Array<Message> = MESSAGES;
    constructor() {}
    getMessages():Array<Message> {
        return this.messages;
    }
    sendMessage(msg: string, user_name: string): boolean {
        this.messages.push({
            user_name: user_name,
            message: msg,
            time: new Date()
        });
        //onSuccess
        return true;
    }
}