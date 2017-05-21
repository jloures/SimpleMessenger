import { Component, Input } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: 'src/app/templates/footer.component.html',
  styleUrls: ['src/app/styles/footer.component.css']
})

export class Footer {
    @Input() messageInput: string;

    onEnter() {
        var messageToSend:string = this.messageInput;
        this.messageInput = '';
        console.log(messageToSend);
    }
}