import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
    private messages = [];
    constructor() {}
    getMessages() {
        return this.messages;
    }
    sendMessage(msg: string) {
        this.messages.push(msg);
    }
}