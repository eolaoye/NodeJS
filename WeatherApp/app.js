import request from 'postman-request';

const url = 'http://api.weatherstack.com/current?access_key=1e67d55b7337a8224712d6894d9fbf0f&query=Lagos'
request(url, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.


const data = JSON.parse(body);
console.log(data.current);
});
