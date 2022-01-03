const fs = require('fs');

const buffer = fs.readFileSync('test.json');
const fileContent = buffer.toString();

const jsonObject = JSON.parse(fileContent);

jsonObject.age = 30;
jsonObject.planet = "Mars";

const newFileContent = JSON.stringify(jsonObject);

fs.writeFileSync('test.json', newFileContent);