/* eslint-disable import/prefer-default-export */
import { CONTACT, CONTACT_FAILED, CONTACT_SUCCESSFULLY } from '../../constants';

export const contactFailed = error => ({
  type: CONTACT_FAILED,
  payload: error,
});

export const contactSuccessfully = user => ({
  type: CONTACT_SUCCESSFULLY,
  payload: user,
});
