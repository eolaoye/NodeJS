const fs = require('fs');

fs.writeFileSync('NodeNote.txt', 'This file was created by Node.js');

fs.appendFileSync('NodeNote.txt', '\nThis is an addition to the file written earlier');