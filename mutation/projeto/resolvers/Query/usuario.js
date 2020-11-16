const { usuarios } = require("../data/db");
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
};
