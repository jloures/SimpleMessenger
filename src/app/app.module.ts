import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MessageInput } from './message-input.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, MessageInput ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}