import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './components/app.component';
import { Header } from './components/header.component';
import { Footer } from './components/footer.component';
import { Content } from './components/content.component';

import { MessageService } from './services/message.service';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, Footer, Header, Content ],
  providers: [ MessageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {} 