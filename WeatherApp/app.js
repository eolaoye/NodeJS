import request from 'postman-request';

const url = 'http://api.weatherstack.com/current?access_key=1e67d55b7337a8224712d6894d9fbf0f&query=Lagos'
request(url, { json: true }, function (error, response, body) {
  if (error) {
    // console.log('error:', error); // Print the error if one occurred
    console.log('Could not connect to weather service');
  }
  else if (body.error) {
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('Could not retrieve weather information')
  }
  
  // console.log(body);
  const weather = body.current;
  console.log(weather.weather_descriptions[0], " The temperature is ", weather.temperature, 'degrees celcius. It feels like', weather.feelslike, 'degrees celcius.')

});


//pk.eyJ1IjoiZW9sYW95ZSIsImEiOiJja3kxaWQ5cGEwMHRmMnZsNTAwMXJkN24yIn0.JnG9GCggWjVCmwi9Q2c4eA

const mbUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/lagos.json?access_token=pk.eyJ1IjoiZW9sYW95ZSIsImEiOiJja3kxaWQ5cGEwMHRmMnZsNTAwMXJkN24yIn0.JnG9GCggWjVCmwi9Q2c4eA&limit=1'

request(mbUrl, { json: true }, function (error, response, body) {

  if (error) {
    // console.log('error:', error); // Print the error if one occurred
    console.log('Could not connect to geocoding service');
  }
  else if (body.features.length === 0) {
    console.log('Location does not exist!'); // Print the error if one occurred
  }
  else {
    const longitude = body.features[0].center[0];
    const latitude = body.features[0].center[1];

    console.log(latitude, longitude);
  }
});