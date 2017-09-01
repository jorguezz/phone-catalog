import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { PhoneService } from '../../services/phone.service';
import { LoadingService } from '../../services/loading.service';
import { PhonesState } from '../../store/state';
import { PhonesActions } from '../../store/actions';


@Injectable()
export class PhonesEffects {

  constructor (
    private actions$: Actions,
    private phoneService: PhoneService,
    private loadingService: LoadingService
  ) {}

  @Effect() loadPhones$ = this.actions$
    .ofType(PhonesActions.LOAD_PHONES)
    .map(() => this.loadingService.showLoading())
    .switchMap(() => this.phoneService.getPhones())
    .map(phones => {
      this.loadingService.hideLoading();
      return PhonesActions.loadPhonesSuccess(phones)
    })
}
