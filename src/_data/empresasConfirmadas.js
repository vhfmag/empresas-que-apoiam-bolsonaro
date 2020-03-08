const empresas = require("./empresas.json");

module.exports = empresas.sort(empresa => empresa.nome).filter(empresa => empresa.fonte);