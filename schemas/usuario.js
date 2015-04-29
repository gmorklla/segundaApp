var mongoose = require('mongoose');

module.exports = mongoose.model('Usuario', {
	number: Number,
	nombre: String,
	correo: String,
	password: String
});