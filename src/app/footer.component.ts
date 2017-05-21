import { Component, Input } from '@angular/core';

@Component({
  selector: 'footer',
  template: `
    <div class="footer container-fluid">
        <div class="input-group msg-box">
        <input #msginput type="text"  [(ngModel)]="messageInput" (keyup.enter)=onEnter() class="form-control" placeholder="Search for...">
        <span class="input-group-btn">
            <button class="btn btn-secondary" type="button">Go!</button>
        </span>
        </div>
    </div>
  `,
  styles: [`
    div.footer {
      position: absolute;
      bottom: 0;
      width: 100%;
    }
    div.msg-box {
      height: 100%;
      align-items: center;
      margin: auto;
      max-width: 650px;
      margin-bottom: 30px;
    }
  `]
})

export class Footer {
    @Input() messageInput: string;

    onEnter() {
        var messageToSend:string = this.messageInput;
        this.messageInput = '';
        console.log(messageToSend);
    }
}