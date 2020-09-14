const express = require('express');

const app = express();


app.use(() => {
    console.log('hellow server');
    console.log('hellow server 1');
    console.log('hellow server 2');
    console.log('hellow server 3');
    console.log('hellow server 4');
})

app.listen(4000);