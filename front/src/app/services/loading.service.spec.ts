import {LoadingService} from './loading.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

describe('LoadingService', () => {

  beforeEach(function() {
    this.loading = new LoadingService();
  });

  it('should have isLoading property set', function() {
    expect(this.loading.isLoading).toBeDefined()
    expect(this.loading.isLoading.next).toBeDefined()
  });

  it('should have hideLoading method', function() {
    expect(this.loading.hideLoading).toBeDefined()
  });

  it('should have showLoading method', function() {
    expect(this.loading.showLoading).toBeDefined()
  });

  it('should have default value to false', function() {
    expect(this.loading.getValue).toBeFalsy();
  });

  it('should call next method on exec showLoading method', function() {
    const showLoadingSpy = spyOn(this.loading.isLoading, 'next');
    this.loading.showLoading();
    expect(showLoadingSpy).toHaveBeenCalled()
    expect(showLoadingSpy).toHaveBeenCalledWith(true)
  });

  it('should call next method on exec hideLoading method', function() {
    const hideLoadingSpy = spyOn(this.loading.isLoading, 'next');
    this.loading.hideLoading();
    expect(hideLoadingSpy).toHaveBeenCalled()
    expect(hideLoadingSpy).toHaveBeenCalledWith(false)
  });

});
