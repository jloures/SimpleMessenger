import { Component, OnInit } from '@angular/core';
import { MessageService } from "../services/message.service";
import { User } from '../user';

import { Message } from '../message'; 

@Component({
  selector: 'content',
  templateUrl: 'src/app/templates/content.component.html',
  styleUrls: ['src/app/styles/content.component.css']
})

export class Content implements OnInit {
  private messages:Array<Message>;
  private current_user:User = { name: 'me' }
  ngOnInit(): void {
    this.messages = this.messageService.getMessages();
  }
  constructor(private messageService: MessageService) {}
  getMessagePosition(user_name:string):string {
    if( user_name === this.current_user.name ) {
      return 'right';
    }
    return 'none';
  }
  getMarginCorrection(user_name:string):string {
    if( user_name === this.current_user.name ) {
      return '15px';
    }
    return '30px';
  }
}