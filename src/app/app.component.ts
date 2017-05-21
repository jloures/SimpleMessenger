import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <main>
      <div class="application">
        <div class="header">
          <h4 class="page-title container-fluid">
            Simple Messenger <br>
            There {{numUsers > 1 ? 'are' : 'is' }} {{numUsers}} user{{numUsers > 1 ? 's' : '' }} online
          </h4>
        </div>
        <div class="content container-fluid">
        </div>
        <div class="footer container-fluid">
          <div class="input-group msg-box">
            <input type="text" class="form-control" placeholder="Search for...">
            <span class="input-group-btn">
              <button class="btn btn-secondary" type="button">Go!</button>
            </span>
          </div>
        </div>
      </div>
    </main>
  `,
  styles: [`
    div.content {
      height: calc(100% - 155px);
      border: 3px solid black;
    }
    h4.page-title {
      text-align: center;
    }
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

export class AppComponent {
  numUsers = 1;
}