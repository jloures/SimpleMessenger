import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
    private messages:Array<string> = [];
    constructor() {}
    getMessages():Array<string> {
        return this.messages;
    }
    sendMessage(msg: string) {
        this.messages.push(msg);
    }
}