import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  private opened: Boolean = false;

  constructor() { }

  ngOnInit() { }

  show() {
    this.opened = true;
  }

  hide() {
    this.opened = false;
  }

  toggle() {
    this.opened = !this.opened;
  }
}
