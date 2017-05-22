import { Component, OnInit } from '@angular/core';

import { MessageService } from '../services/message.service';

@Component({
  selector: 'header',
  templateUrl: '../templates/header.component.html',
  styleUrls: ['../styles/header.component.css']
})

export class Header implements OnInit {
  public usersInfo;
  ngOnInit():void {
  }
  constructor(private messageService: MessageService) {
  }
}
