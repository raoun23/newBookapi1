import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BookComponent} from './book/book.component'
import { from } from 'rxjs';
import { BookService } from './book/book.service';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,BookComponent
  ],
  imports: [
    BrowserModule,HttpModule,
    AppRoutingModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
