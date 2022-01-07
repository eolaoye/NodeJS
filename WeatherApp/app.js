import geocode from './utils/geocode.js';
import weather from './utils/weather.js';

const searchText = process.argv[2];

if(!searchText) {
  console.log('Please specify a location to search');
}
else {
  geocode(searchText, (error, {latitude, longitude, location} = {}) => {
    if (error){
      console.log('Geocode Error:', error);
    }
    else {
      weather(latitude + ',' + longitude, (error, weatherData) => {
        if (error){
          console.log('Weather Error:', error);
        }
        else {
          console.log('Weather information for', location);
          console.log(weatherData);
        }
      });
    }
  });
}

