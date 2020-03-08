const empresas = require("./empresas.json");

module.exports = empresas.filter(empresa => empresa.fonte);