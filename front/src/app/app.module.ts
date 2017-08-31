import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


// Pipes
import { PriceFormatterPipe } from './pipes/priceFormat.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PriceFormatterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
