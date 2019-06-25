var a = 1;
var express = require('express');
var app = express();
var session = require('express-session');
var ejs = require('express-ejs-layouts');
app.use(ejs);

var bodyparser = require('body-parser'); // sunucudan gelen JSON datayı okumak için kullanılıyor
var path = require('path');
var fs = require('fs');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './models/views'));
app.use(bodyparser.urlencoded({ extended:true }));

app.use(session({ secret: '123456789', resave: false, saveUninitialized: true, cookie: { path: '/', httpOnly: true } }));//SESSİON KODU

var router = require('./models/router/Router');
app.use('/public', express.static(path.join(__dirname, 'public'))); //Public klasörüne erişimi açan satırdır.

app.use('/', router); // ANA OMURGA Olmazsa Olmazlardan





app.use(function (req, res) {
	//res.write('SAYFA BULUNAMADI');
	//res.end();
	res.render('h404', { h404: "Oops!!! Bazı şeyler ters gidiyor" })
});
app.listen(80, () => {
	console.log('Uygulama çalıştırıldı...');
});
