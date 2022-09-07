const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res)=>{
    res.sendFile((__dirname + '/views/home.html'));
});

app.get('/login', (req, res)=>{
    res.sendFile((__dirname + '/views/login.html'));
});

app.get('/crear', (req, res)=>{
    res.sendFile((__dirname + '/views/crearCuenta.html'));
});

app.use(express.static(path.resolve(__dirname, './public')));

app.listen(process.env.PORT || 3000, function(){
    console.log("servidor arriba");
})