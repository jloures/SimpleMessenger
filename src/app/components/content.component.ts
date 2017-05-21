import { Component, OnInit } from '@angular/core';
import { MessageService } from "../services/message.service";

import { Message } from '../message'; 

@Component({
  selector: 'content',
  templateUrl: 'src/app/templates/content.component.html',
  styleUrls: ['src/app/styles/content.component.css']
})

export class Content implements OnInit {
  private messages:Array<Message>;
  ngOnInit(): void {
    this.messages = this.messageService.getMessages();
    console.log(this.messages)
  }
  constructor(private messageService: MessageService) {} 
}