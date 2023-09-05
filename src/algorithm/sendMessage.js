import axios from 'axios';

import {
  SMS_URL_SERVICE,
  ACCOUNT_SID,
  AUTH_TOKEN,
  SERVICE_PHONE_NUMBER,
} from './config';

export const sendMessage = (userPhoneNumber, content) => {
  const data = new URLSearchParams();
  data.append('To', userPhoneNumber);
  data.append('From', SERVICE_PHONE_NUMBER);
  data.append('Body', content);

  axios
    .post(SMS_URL_SERVICE, data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      auth: {
        username: ACCOUNT_SID,
        password: AUTH_TOKEN,
      },
    })
    .then((response) => {
      console.log('Message sent successfully:', response.data);
    })
    .catch((error) => {
      console.error('Error sending message:', error);
    });
};
