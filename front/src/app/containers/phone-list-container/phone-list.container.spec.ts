import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import { LoadingService } from '../../services/loading.service';
import { PhoneDetailComponent } from '../../components/phone-detail-component/phone-detail.component';
import { PhonesPlaceholderComponent } from '../../components/phones-placeholder-component/phones-placeholder.component';
import { PriceFormatterPipe } from '../../pipes/price-format.pipe';
import { PhoneListContainer } from './phone-list.container';

const LoadingServiceStub = {
  hideLoading: function(){}
};

const StoreStub = {
  dispatch: function(){},
  select: function(){}
};

describe('Component: PhoneListContainer', () => {

  let comp:    PhoneListContainer;
  let fixture: ComponentFixture<PhoneListContainer>;
  let de:      DebugElement;
  let el:      HTMLElement;
  let loadingService: LoadingService;
  let store;

  let selectSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PhoneListContainer,
        PhonesPlaceholderComponent,
        PhoneDetailComponent,
        PriceFormatterPipe ], // declare the test component
      providers:    [
        {provide: LoadingService, useValue: LoadingServiceStub },
        {provide: Store, useValue: StoreStub} ]
    })
    .compileComponents() // compile template and css
  }));

  beforeEach(() => {
    // LoadingService from the root injector
    loadingService = TestBed.get(LoadingService);
    // Store Dep from the root injector
    store = TestBed.get(Store);

    fixture = TestBed.createComponent(PhoneListContainer);

    comp = fixture.componentInstance; // BannerComponent test instance
    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('.products_container'));
    el = de.nativeElement;
  });

  it('should have ngOnInit method', () => {
    expect(comp.ngOnInit).toBeDefined('ngOnInit implemented');
  });

  it('should have service injected and called', () => {
    selectSpy = spyOn(store, 'select').and.returnValue({ subscribe: () => {} })

    fixture.detectChanges(); // Initialize binding
    expect(comp.phones$).toBeDefined();
    expect(comp.phones).toBeDefined();
    expect(comp.phones.length).toBe(0);
    expect(selectSpy).toHaveBeenCalled();
    //console.log(el);
  });

});
