import { Action } from '@ngrx/store';

export const PhonesActions = {

  LOAD_PHONES: '[Phones] Load Phones',
  LOAD_PHONES_SUCCESS: '[Phone] Load Phones Success',
  GET_PHONE: '[Phone] Get Phone',
  GET_PHONE_SUCCESS: '[Phone] Get Phone Success',
  SAVE_PHONE: '[Phone] Save Phone',
  SAVE_PHONE_SUCCESS: '[Phone] Save Phone Success',
  ADD_PHONE: '[Phone] Add Phone',
  ADD_PHONE_SUCCESS: '[Phone] Add Phone Success',

  loadPhones() {
    return {
       type: PhonesActions.LOAD_PHONES
    };
  },

  loadPhonesSuccess(phones) {
    return {
      type: PhonesActions.LOAD_PHONES_SUCCESS,
      payload: phones
    };
  },

  getPhone(id) {
    return {
      type: PhonesActions.GET_PHONE,
      payload: id
    };
  },

  getPhoneSuccess(phone) {
    return {
      type: PhonesActions.GET_PHONE_SUCCESS,
      payload: phone
    };
  },

  savePhone(phone) {
    return {
      type: PhonesActions.SAVE_PHONE,
      payload: phone
    };
  },

  savePhoneSuccess(phone) {
    return {
      type: PhonesActions.SAVE_PHONE_SUCCESS,
      payload: phone
    };
  },

  addPhone(phone) {
    return {
      type: PhonesActions.ADD_PHONE,
      payload: phone
    };
  },

  addPhoneSuccess(phone) {
    return {
      type: PhonesActions.ADD_PHONE_SUCCESS,
      payload: phone
    };
  }

};
