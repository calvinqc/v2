import { CONTACT, CONTACT_SUCCESSFULLY, CONTACT_FAILED } from '../../constants';
export default function(state = { loading: false, errors: null }, action) {
  switch (action.type) {
    case CONTACT:
      return { ...state, ...action.payload, ...{ loading: false } };
    case CONTACT_SUCCESSFULLY:
      return { ...state, ...action.payload, ...{ loading: false } };
    case CONTACT_FAILED:
      return { ...state, ...action.payload, ...{ loading: false } };

    default:
      return state;
  }
}
