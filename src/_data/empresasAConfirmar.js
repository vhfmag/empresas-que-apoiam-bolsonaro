const empresas = require("./empresas.json");

module.exports = empresas.sort((a, b) => a.nome.localeCompare(b.nome)).filter(empresa => !empresa.fonte);