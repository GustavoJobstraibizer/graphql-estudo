const { usuarios, perfis } = require("../data/db");
const { indiceUsuario } = require("../utils/utils");

module.exports = {
  usuarios() {
    return usuarios;
  },
  usuario(_, { filtro }) {
    const indiceUser = indiceUsuario(filtro);

    if (indiceUser < 0) return null;

    return usuarios[indiceUser];
  },

  perfis() {
    return perfis;
  },

  perfil(_, { id }) {
    const sels = perfis.filter((p) => p.id === id);
    return sels ? sels[0] : null;
  },
};
