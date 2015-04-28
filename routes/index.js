
/*
 * GET home page.
 */

var usuarios = require('../data');
var usuario = require('../usuario');

for(var number in usuarios){
		usuarios[number] = usuario(usuarios[number]);
	}

module.exports = {

	login : function(req, res){
	  res.render('registro', { title: 'Registro' });
	},

	registro : function(req, res){
	  res.render('index', {
	  	title: 'Registro',
	  	nombre: req.body.inputName,
	  	correo: req.body.inputEmail,
	  	password: req.body.inputPassword
	  });
	}
};