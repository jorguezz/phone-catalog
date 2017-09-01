import { ActionReducer, Action } from '@ngrx/store';
import { PhonesIntitialState, PhonesState} from '../state';
import { PhonesActions } from '../actions/phones.actions';

export function phonesReducer(state: PhonesState = PhonesIntitialState, action: {type, payload}) {

  switch (action.type) {

    case PhonesActions.LOAD_PHONES: {
      return state
    }

    case PhonesActions.LOAD_PHONES_SUCCESS: {
      return { phones: [...action.payload] }
    }

    default: {
      return state
    }

  }

}
