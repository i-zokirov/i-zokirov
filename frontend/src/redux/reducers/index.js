import { ADD_NOTIFICATION, RESET_NOTIFICATION } from '../constants';

export const notificationReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return { ...action.payload };
    case RESET_NOTIFICATION:
      return {};
    default:
      return state;
  }
};
