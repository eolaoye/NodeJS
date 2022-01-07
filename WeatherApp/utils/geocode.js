import request from 'postman-request';

function geocode(address, callback) {
    const mbUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ 
                  encodeURIComponent(address) +
                  '.json?access_token=pk.eyJ1IjoiZW9sYW95ZSIsImEiOiJja3kxaWQ5cGEwMHRmMnZsNTAwMXJkN24yIn0.JnG9GCggWjVCmwi9Q2c4eA&limit=1'

    request(mbUrl, { json: true }, function (error, response, body) {

        if (error) {
            // return the error if one occurred
            callback('Could not connect to geocoding service');
        }
        else if (body.features.length === 0) {
            callback('Location does not exist!'); // return the error if one occurred
        }
        else {
            //return the longitude, latitide and place name
            const info = body.features[0];
            callback(null, {
                longitude: info.center[0],
                latitude: info.center[1],
                location: info.place_name
            });
        }
    });
}

export { geocode as default };