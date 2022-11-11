const axios = require("axios");

axios.defaults.baseURL = 'http://localhost:5000/api';

axios
  .get("/")
  .then(function (response) {
    if(response.data.msg == 'Simple message!') console.log('"/" - OK');
    console.log(`${response.data.msg}
    `);
  })
  .catch(function (error) {
    if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        console.log('/postping - ERROR-RESPONCE')
      } else if (error.request) {
        console.log(error.request);
        console.log('/postping - ERROR-REQUEST');
      } else {
        console.log('Error', error.message);
        console.log('/postping - ERROR');
      }
      console.log(error.config);
      console.log('/postping - ERROR.CONFIG');
      process.exit(1);
  });

axios
  .get("/getping?msg=PongTest")
  .then(function (response) {
    if(response.data.msg == 'GET Pong: PongTest') console.log('"/getping" - OK');
    console.log(`${response.data.msg}
    `);
  })
  .catch(function (error) {
    if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        console.log('/postping - ERROR-RESPONCE')
      } else if (error.request) {
        console.log(error.request);
        console.log('/postping - ERROR-REQUEST');
      } else {
        console.log('Error', error.message);
        console.log('/postping - ERROR');
      }
      console.log(error.config);
      console.log('/postping - ERROR.CONFIG');
      process.exit(1);
  });

axios
  .post("/postping", {
    msg: 'Pong test',
  })
  .then(function (response) {
    if(response.data.msg == 'POST Pong: Pong test') console.log('"/postping" - OK');
    console.log(`${response.data.msg}
    `);
  })
  .catch(function (error) {
    if (error.response) {
        console.log('/postping - ERROR-RESPONCE:');
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log('/postping - ERROR-REQUEST:');
        console.log(error.request);
      } else {
        console.log('/postping - ERROR:');
        console.log('Error', error.message);
      }
      console.log(error.config);
      process.exit(1);
  });