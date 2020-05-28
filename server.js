const express = require('express');
const app = express();
const path= require('path');
const port = 3000;
const users = require('./routes/users');


// app.use(express.static('public'))    - relative path
app.use(express.static(path.join(__dirname, 'public')))   // absolute path

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

app.use('/users', users);

app.get('/', (req, res) => {
    res.send('Hello World!!')
})

app.listen(port, () => console.log('Express server started!!'));
