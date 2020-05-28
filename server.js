const express = require('express');
const app = express();
const port = 3000;

app.all('/user', (req, res, next) => {
    console.log('<-- middleware -->');
    next();
})

app.delete('/user', (req, res) => {
    res.send('Delete request!!')
})

app.put('/user', (req, res) => {
    res.send('PUT request!!')
})

app.post('/user', (req, res) => {
    res.send('POST request!!')
})

app.get('/', (req, res) => {
    res.send('Hello World!!')
})

app.listen(port, () => console.log('Express server started!!'));
