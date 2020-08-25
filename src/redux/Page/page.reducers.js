import { SHOW_NOTIFICATION } from './page.actions';

const initialTheNotificationBaseData = {
  status: false,
  type: 'default',
  title: 'This is the title',
};

// eslint-disable-next-line import/prefer-default-export
export const notificationDataReducer = (
  state = initialTheNotificationBaseData,
  action
) => {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return action.payload.data;

    default:
      return state;
  }
};
