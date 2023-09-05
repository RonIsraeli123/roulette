import axios from 'axios';

export const sendMessage = (userPhoneNumber, content) => {
  const accountSid = process.env.REACT_APP_ACCOUNT_SID;
  const authToken = process.env.REACT_APP_ACCESS_TOKEN;
  const apiUrl =
    'https://api.twilio.com/2010-04-01/Accounts/AC2f8e5f7c670944f0d90f1718f364a70b/Messages.json';

  const data = new URLSearchParams();
  data.append('To', userPhoneNumber);
  data.append('From', process.env.REACT_APP_NUMBER);
  data.append('Body', content);

  axios
    .post(apiUrl, data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      auth: {
        username: accountSid,
        password: authToken,
      },
    })
    .then((response) => {
      console.log('Message sent successfully:', response.data);
    })
    .catch((error) => {
      console.error('Error sending message:', error);
    });
};
