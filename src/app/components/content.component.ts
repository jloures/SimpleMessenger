import { Component, OnInit } from '@angular/core';
import { MessageService } from "../services/message.service";

@Component({
  selector: 'content',
  templateUrl: 'src/app/templates/content.component.html',
  styleUrls: ['src/app/styles/content.component.css']
})

export class Content implements OnInit {
  ngOnInit(): void {
    //for future use
  }
  constructor(private MessageService: MessageService) {} 
}