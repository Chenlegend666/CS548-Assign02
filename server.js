const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();
const port = 8080;

const options = {
    key: fs.readFileSync('./ssl/key.key'),
    cert: fs.readFileSync('./ssl/cert.crt')
};

const server = https.createServer(options, app);
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Hello, world! ---Liang Chen 19798');
});

app.post('/', (req, res) => {
    res.status(201).send('Hello, world!');
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});