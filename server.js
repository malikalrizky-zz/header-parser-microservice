const express = require('express');
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require('cors');
app.use(cors({ optionSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// Root endpoint. Display index file
app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'));

// Return info about the visiting user
app.get('/api/whoami', (req, res) => res.json({
    ipaddress: req.ip,
    language: req.headers['accept-language'],
    software: req.headers['user-agent']
}));

// Create a listener to handle requests
const listener = app.listen(process.env.PORT, () => console.log('Your app is listening on port ' + listener.address().port));