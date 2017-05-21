import { Injectable } from '@angular/core';

import { Message } from '../message';
import { User } from '../user';

import { MESSAGES } from './mock-messages';

@Injectable()
export class MessageService {
    private messages:Array<Message> = MESSAGES;
    constructor() {}
    getMessages():Array<Message> {
        return this.messages;
    }
    sendMessage(msg: string, user: User): boolean {
        //this shouldn't be here
        //I'll deal with this later on
        var objDiv = document.getElementById("content");
        objDiv.scrollTop = objDiv.scrollHeight;
        console.log({type: typeof objDiv.scrollHeight, scrollHeight: objDiv.scrollHeight});
        this.messages.push({
            user_name: user.name,
            message: msg,
            time: new Date()
        });
        //onSuccess
        return true;
    }
}