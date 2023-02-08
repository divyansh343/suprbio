import {
  getCookie
} from './setCookie';

var axios = require('axios');

export const getUserDetails = async () => {
  var config = {
    method: 'get',
    url: 'http://localhost:3000/api/me',
    headers: {
      'Authorization': `Bearer ${getCookie()}`
    },
  };
  axios(config)
    .then(function (response) {
      // console.log(response.data));
      const user = response.data;
      return user
    })
    .catch(function (error) {
      console.log(error);
    });
}

// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });