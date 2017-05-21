import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <main>
        <header></header>
        <content></content>
        <footer></footer>
    </main>
  `,
  styles: [``]
})

export class AppComponent {
  numUsers = 1;
}