import { Component } from '@angular/core';

@Component({
  selector: 'header',
  template: `
    <div class="header">
        <h4 class="page-title container-fluid">
        Simple Messenger <br>
        There {{numUsers > 1 ? 'are' : 'is' }} {{numUsers}} user{{numUsers > 1 ? 's' : '' }} online
        </h4>
    </div>
  `,
  styles: [`
    div.content {
      height: calc(100% - 155px);
      border: 3px solid black;
    }
    h4.page-title {
      text-align: center;
    }
  `]
})

export class Header {
    numUsers = 1;
}