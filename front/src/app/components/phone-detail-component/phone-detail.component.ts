import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.scss']
})
export class PhoneDetailComponent implements OnInit {

  @Input() private phone: Object;

  constructor () {}

  ngOnInit() {}

  private addToCart(ev, phone) {
    console.log(phone);
  }
}
