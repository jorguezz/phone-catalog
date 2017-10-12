import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { PhoneDetailComponent } from '../../components/phone-detail-component/phone-detail.component';
import { PriceFormatterPipe } from '../../pipes/price-format.pipe';

const data = {
  phones: [ { id: 1, name: 'samsung', color: 'black', price: 500}]
};

describe('Component: PhoneDetailComponent', () => {

  let comp:    PhoneDetailComponent;
  let fixture: ComponentFixture<PhoneDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PhoneDetailComponent,
        PriceFormatterPipe ], // declare the test component
    })
    .compileComponents() // compile template and css
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneDetailComponent);
    comp = fixture.componentInstance; // BannerComponent test instance
    comp.phone = { id: 1, name: 'Samsung Galaxy S8', color: 'black', price: 700, image: 'http://...' };
  });

  it('should have phone img rendered', () => {
    fixture.detectChanges();

    let imgDebEl = fixture.debugElement.query(By.css('img'));
    let el = imgDebEl.nativeElement;
    expect(el.src).toBeDefined();
  });

  it('should call addToCart method', () => {
    let addToCartSpy = spyOn(comp, 'addToCart');

    fixture.detectChanges();

    let addToCardEl = fixture.debugElement.query(By.css('.add_to_cart'));
    let el = addToCardEl.nativeElement;
    el.click();
    expect(addToCartSpy).toHaveBeenCalled();
  });

});
