import {
  EMPLOYEE_UPDATE
} from './types';

// goal: create one Action Creator that can be used for all fields
export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value },
  };
};
