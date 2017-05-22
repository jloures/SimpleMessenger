import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

import { Message } from '../message';
import { User } from '../user';

@Injectable()
export class MessageService {
    private messages:Array<Message> = [];
    private socket;
    constructor() {
        this.socket = io();
        var self = this;
        this.socket.on('chat message', function(msg){
            self.messages.push({
                user_name: msg.user_name,
                message: msg.value,
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

        this.socket.emit('chat message', {
          value: msg,
          user_name: 'Unknown'
        });

        this.messages.push({
            user_name: user.name,
            message: msg,
            time: new Date()
        });
        //onSuccess
        return true;
    }
}
