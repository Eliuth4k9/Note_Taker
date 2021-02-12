const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 7000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

// require('./routes/apiRoute.js')(app);
require('./routes/htmlRoute.js')(app);



app.listen(PORT, ()=>{
    console.log('The app is working alright steve', PORT);
});