const express = require('express');
const app = express();
const PORT = process.env.PORT || 3443;
var path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');


//imports routes
const workersRoute = require('./routes/workers');

//middlewares
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/workers', workersRoute);

//routes
app.get('/', (req, res) => {
    res.send('we are on home.');
})

//connect to db
mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('connected to db!')
);

//listening to the server 
app.listen(PORT);