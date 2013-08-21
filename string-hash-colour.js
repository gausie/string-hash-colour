var crc32 = require("easy-crc32");

module.exports = {
	convert: convert
}

function convert(string){
	crc = crc32.calculate(string);
	hex = crc.toString(16);
	return "#" + hex.substring(0, 6);
}
