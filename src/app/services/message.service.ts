import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

import { Message } from '../message';
import { User } from '../user';

import { MESSAGES } from './mock-messages';

@Injectable()
export class MessageService {
    private messages:Array<Message> = MESSAGES;
    private socket;
    constructor() {
        this.socket = io();
        this.socket.on('chat message', function(msg){
            this.messages.push({
                user_name: 'you',
                message: msg,
                time: new Date()
            });
        });
    }
    getMessages():Array<Message> {
        return this.messages;
    }
    sendMessage(msg: string, user: User): boolean {
        //this shouldn't be here
        //I'll deal with this later on
        var objDiv = document.getElementById("content");
        objDiv.scrollTop = objDiv.scrollHeight;

        this.socket.emit('chat message', msg );

        this.messages.push({
            user_name: user.name,
            message: msg,
            time: new Date()
        });
        //onSuccess
        return true;
    }
}