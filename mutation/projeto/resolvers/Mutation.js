const { usuarios, nextId } = require("../data/db");
const { indiceUsuario } = require("../utils/utils");

module.exports = {
  // { nome, email, idade }
  novoUsuario(_, { dados }) {
    const emailExists = usuarios.some((u) => u.email === dados.email);

    if (emailExists) {
      throw new Error("E-mail já cadastrado");
    }

    const novoUsuario = {
      id: nextId(),
      ...dados,
      perfil_id: 1,
      status: "ATIVO",
    };

    usuarios.push(novoUsuario);
    return novoUsuario;
  },

  excluirUsuario(_, { filtro }) {
    const index = indiceUsuario(filtro);

    if (index < 0) return null;

    const excluidos = usuarios.splice(index, 1);
    return excluidos ? excluidos[0] : null;
  },

  alterarUsuario(_, { dados }) {
    const indexUsuario = indiceUsuario(dados.filtro);

    if (!indexUsuario < 0) {
      throw new Error("Usuário não encontrado");
    }

    const updateUsuario = {
      ...usuarios[indexUsuario],
      ...dados.usuario,
    };

    usuarios.splice(indexUsuario, 1, updateUsuario);

    return updateUsuario;
  },
};
