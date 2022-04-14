require('dotenv').config();
const express = require('express');
const server = express();
const router = require('./app/router');

const port = process.env.PORT || 3000;

server.set('view engine', 'ejs');
server.set('views', 'app/views' )


server.use(router);

server.listen(port, () => {
    console.log(`Listening on: ${port}`);
})