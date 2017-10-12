import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.scss']
})
export class PhoneDetailComponent {

  @Input() phone: object;

  constructor () {}

  addToCart(ev, phone) {
    console.log(phone);
  }
}
