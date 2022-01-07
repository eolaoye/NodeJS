const https = require('https');

const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/lagos.json?access_token=pk.eyJ1IjoiZW9sYW95ZSIsImEiOiJja3kxaWQ5cGEwMHRmMnZsNTAwMXJkN24yIn0.JnG9GCggWjVCmwi9Q2c4eA&limit=1';
const req = https.request(url, (response) => {

    let data = '';
    response.on('data', (chunk) => {
        data += chunk.toString();
    });

    response.on('end', () => {
        console.log(JSON.parse(data));
    });
})

req.on('error', (error) => {
    console.log(error);
})

req.end();