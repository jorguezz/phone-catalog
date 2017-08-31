import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Containers
import { PhoneListContainer } from './containers/phone-list-container/phone-list.container';

// Components
import { PhoneDetailComponent } from './components/phone-detail-component/phone-detail.component';
import { PhonesPlaceholderComponent } from './components/phones-placeholder-component/phones-placeholder.component';
import { SpinnerComponent } from './components/spinner-component/spinner.component';

// Pipes
import { PriceFormatterPipe } from './pipes/price-format.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PhoneListContainer,
    PhonesPlaceholderComponent,
    PhoneDetailComponent,
    SpinnerComponent,
    PriceFormatterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
