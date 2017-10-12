import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadingService } from '../../services/loading.service';
import { PhonesState } from '../../store/state';
import { PhonesActions } from '../../store/actions';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'phone-list',
  templateUrl: './phone-list.container.html',
  styleUrls: ['./phone-list.container.scss']
})
export class PhoneListContainer implements OnInit{

  phones = [];
  phones$: Observable<any>;

  constructor (
    private store: Store<any>,
    private loadingService: LoadingService) {
  }

  ngOnInit() {
    this.phones$ = this.store.select('phonesState');

    this.phones$.subscribe((data) => {
      if(data) {
        this.phones = data.phones;
        this.loadingService.hideLoading();
      }
    });

    this.store.dispatch(PhonesActions.loadPhones());
  }

}
