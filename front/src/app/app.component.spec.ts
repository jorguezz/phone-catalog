import { TestBed, async } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { EffectsModule } from '@ngrx/effects';

import { SpinnerComponent } from './components/spinner-component/spinner.component';
import { PhoneDetailComponent } from './components/phone-detail-component/phone-detail.component';
import { PhonesPlaceholderComponent } from './components/phones-placeholder-component/phones-placeholder.component';
import { PhoneListContainer } from './containers/phone-list-container/phone-list.container';
import { PriceFormatterPipe } from './pipes/price-format.pipe';

import { LoadingService } from './services/loading.service';
import { PhoneService } from './services/phone.service';

import { phonesReducer } from './store/reducers';
import { PhonesEffects } from './store/effects/phones.effect';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
        EffectsModule.forRoot([PhonesEffects])
      ],
      providers: [
        PhoneService,
        LoadingService
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as LoadingService injected`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.loadingService).toBeDefined();
  }));

});
