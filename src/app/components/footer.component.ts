import { Component, Input } from '@angular/core';
import { MessageService } from "../services/message.service";

@Component({
  selector: 'footer',
  templateUrl: '../templates/footer.component.html',
  styleUrls: ['../styles/footer.component.css']
})

export class Footer {
    @Input() messageInput: string;

    constructor(private messageService: MessageService) {}

    sendMessage() {
        var messageToSend:string = this.messageInput;
        var messageSent:boolean = this.messageService.sendMessage(
          messageToSend,
          { name: 'me' }
        );
        if( messageSent === true ) {
          this.messageInput = '';
        }
    }
}
