import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Header } from './header.component';
import { MessageService } from './message.service';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, Footer, Header, Content ],
  providers: [ MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {} 