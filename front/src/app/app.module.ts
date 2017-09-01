import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';

// Containers
import { PhoneListContainer } from './containers/phone-list-container/phone-list.container';

// Components
import { PhoneDetailComponent } from './components/phone-detail-component/phone-detail.component';
import { PhonesPlaceholderComponent } from './components/phones-placeholder-component/phones-placeholder.component';
import { SpinnerComponent } from './components/spinner-component/spinner.component';

// Services
import { PhoneService } from './services/phone.service';
import { LoadingService } from './services/loading.service';

// Pipes
import { PriceFormatterPipe } from './pipes/price-format.pipe';

// Reducers
import { phonesReducer } from './store/reducers';

// Effects
import { PhonesEffects } from './store/effects/phones.effect';


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
    BrowserModule,
    HttpModule,
    StoreModule.forRoot({
      'phonesState': phonesReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    }),
    EffectsModule.forRoot([PhonesEffects])
  ],
  providers: [
    PhoneService,
    LoadingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
