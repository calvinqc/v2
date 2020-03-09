import axios from 'axios';
import {
  contactFailed,
  contactSuccessfully,
} from '../store/actions/contact.action';
import { HOST, CONTACT_URI } from '../constants';

// eslint-disable-next-line import/prefer-default-export
export const contact = contactData => dispatch => {
  axios
    .post(`${HOST}${CONTACT_URI}`, contactData)
    .then(res => dispatch(contactSuccessfully(res.data)))
    .catch(err => dispatch(contactFailed(err)));
};
