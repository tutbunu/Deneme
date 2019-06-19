var path = require('path');
var express = require('express');
var app = express();
//var sql = require('mssql');

//var config = {
//	user: 'sa',
//	password: 'xxxx',
//	server: '192.168.1.30\\SQLEXPRESS01',
//	database: 'xxxx'
	// debug: false,
    // multipleStatements: true
//};

//***********İLK SAYFA AÇILDIĞI ZAMAN KULLANICIYI KARŞILAYAN SAYFA
module.exports.index = function (req, res) {
	// if (sql.open == true) {
	// 	sql.close();
	// }
//	sql.close();
//	sql.connect(config, function (err) {
//		if (err) console.log(err);
//		var request = new sql.Request();
//		request.query('select * from vw_anaKategori', function (err, result) {
//			if (err) throw err;
//			else if (result) {
//				res.render('index', { index: result.recordset });
//			}
//			else { }
//			sql.close()
//		});
//	});
res.render('index');
}

module.exports.kayit = function (req, res) {

	res.render('kayit');
}
module.exports.sifreReset = function (req, res) {

	res.render('sifreReset');
}
module.exports.iletisim = function (req, res) {

	res.render('iletisim');
}
module.exports.giris = function (req, res) {

	res.render('giris');
}
