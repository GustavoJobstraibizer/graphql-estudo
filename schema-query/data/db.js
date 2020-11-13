const usuarios = [
  {
    id: 1,
    nome: "João Silva",
    email: "jsilva@teste.com",
    idade: 29,
    perfil_id: 1,
    status: "ATIVO",
  },
  {
    id: 2,
    nome: "Silva e Silva",
    email: "jSS@teste.com",
    idade: 30,
    perfil_id: 2,
    status: "INATIVO",
  },
  {
    id: 3,
    nome: "Jhon Doe",
    email: "jhonDoe@uol.com",
    idade: 31,
    perfil_id: 1,
    status: "BLOQUEADO",
  },
];

const perfis = [
  {
    id: 1,
    nome: "Comum",
  },
  {
    id: 2,
    nome: "Administrador",
  },
];

module.exports = { usuarios, perfis };
