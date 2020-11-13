const { perfis } = require("../data/db");

module.exports = {
  salario(usuario) {
    return usuario.salario_real;
  },
  nomeEmail(usuario) {
    return `Nome: ${usuario.nome} - Email: ${usuario.email}`;
  },
  perfil(usuario) {
    return perfis.find((perfil) => perfil.id === usuario.perfil_id);
  },
};
