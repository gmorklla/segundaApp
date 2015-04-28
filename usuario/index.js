var Usuario = function () {
	this.data = {
		number: null,
		nombre: null,
		correo: null,
		password: null
	};

	this.fill = function (info) {
		for(var prop in this.data) {
			if(this.data[prop] !== 'undefined') {
				this.data[prop] = info[prop];
			}
		}
	};

	this.getInformation = function () {
		return this.data;
	};
};

module.exports = function (info) {
	var instance = new Usuario();

	instance.fill(info);

	return instance;
};