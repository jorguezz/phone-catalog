import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.scss']
})
export class PhoneDetailComponent implements OnInit {

  @Input() private device: Object;

  constructor () {}

  ngOnInit() {}

  private addToCart(ev, device) {
    console.log(device);
  }
}
