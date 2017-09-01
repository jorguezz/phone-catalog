import { Component, OnInit } from '@angular/core';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public isLoading: boolean;

  constructor (private loadingService: LoadingService) {}

  ngOnInit() {
    this.loadingService.isLoading.subscribe((val: boolean) => {
      this.isLoading = val;
    });
  }
}
