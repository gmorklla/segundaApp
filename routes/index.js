
/*
 * GET home page.
 */
var UsuarioSchema = require('../schemas/usuario');
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

		var record = new UsuarioSchema({
			nombre: req.body.nombre,
			correo: req.body.correo,
			password: req.body.password
		});

		console.log(record);

		record.save(function (err) {
			if(err){
				console.log(err);
				res.status(500).json({status: 'Fallo en el grabado de datos'});
			} else {
				res.render('index', {
					title: 'Registro',
					nombre: req.body.nombre,
					correo: req.body.correo,
					password: req.body.password
				});
			}
		});
	}
};