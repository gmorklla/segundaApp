var mongoose = require('mongoose');

mongoose.connect('mongodb://gmorklla:22782278@ds031852.mongolab.com:31852/usuarios');

module.exports = mongoose.connection;