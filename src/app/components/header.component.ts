import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: 'src/app/templates/header.component.html',
  styleUrls: ['src/app/styles/header.component.css']
})

export class Header {
  private numUsers:number = 1;
}