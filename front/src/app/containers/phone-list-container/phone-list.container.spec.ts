import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Store } from '@ngrx/store';
import { LoadingService } from '../../services/loading.service';
import { PhoneDetailComponent } from '../../components/phone-detail-component/phone-detail.component';
import { PhonesPlaceholderComponent } from '../../components/phones-placeholder-component/phones-placeholder.component';
import { PriceFormatterPipe } from '../../pipes/price-format.pipe';
import { PhoneListContainer } from './phone-list.container';


const data = {
  phones: [ { id: 1, name: 'samsung', color: 'black', price: 500}]
};

const LoadingServiceStub = {
  hideLoading: function(){}
};

const StoreStub = {
  dispatch() {},
  select(): Observable<any> {
    return Observable.of(data);
  }
};


describe('Component: PhoneListContainer', () => {

  let comp:    PhoneListContainer;
  let fixture: ComponentFixture<PhoneListContainer>;
  let de:      DebugElement;
  let el:      HTMLElement;
  let loadingService: LoadingService;
  let store;

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
    //de = fixture.debugElement.query(By.css('.products_container'));
    //el = de.nativeElement;
  });

  it('should have ngOnInit method', () => {
    expect(comp.ngOnInit).toBeDefined('ngOnInit implemented');
  });

  it('should have phones-placeholder rendered when empty phones', () => {
    let selectSpy = spyOn(store, 'select').and.returnValue({ subscribe: () => {} })

    fixture.detectChanges(); // Initialize binding
    expect(comp.phones$).toBeDefined();
    expect(comp.phones).toBeDefined();
    expect(comp.phones.length).toBe(0);
    expect(selectSpy).toHaveBeenCalled();
    let placeholderEl = fixture.debugElement.query(By.css('phones-placeholder'));
    expect(placeholderEl).toBeDefined(); // Placeholder template rendered
  });

  it('should have phones-detail rendered when phones exists', () => {
    let selectSpy = spyOn(store, 'select').and.returnValue(Observable.of(data));

    fixture.detectChanges(); // Initialize binding
    expect(comp.phones$).toBeDefined();
    expect(comp.phones).toBeDefined();
    expect(comp.phones.length).toBe(1);
    expect(selectSpy).toHaveBeenCalled();
    let phonesEl = fixture.debugElement.query(By.css('phones-detail'));
    expect(phonesEl).toBeDefined(); // tmp phone-detail template rendered
  });

});
