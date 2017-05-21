import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MessageInput } from './message-input.component';
import { MessageDisplay } from './message-display.component';

import { MessageService } from './message.service';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, MessageInput, MessageDisplay ],
  providers: [ MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {} 