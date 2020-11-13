module.exports = {
  precoComDesconto(produto) {
    return produto.desconto
      ? parseFloat(produto.preco * (1 - produto.desconto)).toFixed(2)
      : produto.preco;
  },
};
