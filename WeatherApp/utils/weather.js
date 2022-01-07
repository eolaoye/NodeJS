import request from 'postman-request';


function weather(address, callback) {
    const url = 'http://api.weatherstack.com/current?access_key=1e67d55b7337a8224712d6894d9fbf0f&query=' + 
                encodeURIComponent(address);

    request(url, { json: true }, function (error, response, body) {

        if (error) {
            // return the error if one occurred
            callback('Could not connect to weather service');
        }
        else if (body.error) {
            callback('Could not retrieve weather information'); // return the error if one occurred
        }
        else {
            //return the description, temperature and feelslike
            const {weather_descriptions:desc = "Not found", temperature:temp, feelslike} = body.current;
            callback(null, {
                description: desc[0],
                temperature: temp,
                feelslike: feelslike
            });
        }
    });
}

export { weather as default };