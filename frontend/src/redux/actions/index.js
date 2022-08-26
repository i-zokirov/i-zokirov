import { ADD_NOTIFICATION, RESET_NOTIFICATION } from '../constants';

export const deployNotification = (notification, autoReset = true) => {
  return dispatch => {
    dispatch({ type: ADD_NOTIFICATION, payload: notification });
    if (autoReset) {
      setTimeout(() => {
        dispatch({ type: RESET_NOTIFICATION });
      }, 5000);
    }
  };
};

export const removeNotification = () => {
  return dispatch => {
    dispatch({ type: RESET_NOTIFICATION });
  };
};
