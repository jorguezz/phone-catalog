import { Component, Input } from '@angular/core';

@Component({
  selector: 'phone-list',
  templateUrl: './phone-list.container.html',
  styleUrls: ['./phone-list.container.scss']
})
export class PhoneListContainer {

  @Input() private devices: Array<any> = [];

  constructor () {}

}
