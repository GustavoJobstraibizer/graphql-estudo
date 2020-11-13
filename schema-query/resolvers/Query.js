const { usuarios, perfis } = require("../data/db");

module.exports = {
  ola() {
    return "Resolver da consulta ola";
  },
  horaAtual() {
    return new Date();
  },
  usuarioLogado() {
    return {
      id: 1,
      nome: "Jhon",
      email: "jhondoe@doe.com",
      idade: 100,
      salario_real: 1250.35,
      vip: true,
    };
  },
  produto() {
    return {
      nome: "Monitor lg 21",
      preco: 545.99,
      desconto: 0.3,
    };
  },
  numerosMegaSena() {
    const crescente = (a, b) => a - b;
    return Array(6)
      .fill(0)
      .map(() => parseInt(Math.random() * 60 + 1))
      .sort(crescente)
      .filter((item, pos, arr) => !pos || item != arr[pos - 1]);
  },
  usuarios() {
    return usuarios;
  },
  usuario(_, { id }) {
    return usuarios.find((usuario) => usuario.id === id);
  },
  perfis() {
    return perfis;
  },
  perfil(_, { id }) {
    return perfis.find((perfil) => perfil.id === id);
  },
};
