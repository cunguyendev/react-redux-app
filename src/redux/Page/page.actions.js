export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';

export const displayNotification = (data) => ({
  type: SHOW_NOTIFICATION,
  payload: {
    data,
  },
});
