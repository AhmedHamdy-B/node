const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send( 'Welcome To Home Page' );
})

app.listen(3000, () => {
    console.log('Nodejs Rocks');
})
