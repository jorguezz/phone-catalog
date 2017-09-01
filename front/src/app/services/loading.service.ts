import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LoadingService {
    public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    public showLoading() {
      this.isLoading.next(true);
    }

    public hideLoading() {
      this.isLoading.next(false);
    }
}
