import {
  EMPLOYEE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      // note: action.payload === { prop: 'name', value: 'jane'}
      // the square braces are not making a list, it is called "key interpolation"
      // it turns the value into a key
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
