export const getTotalPrice = (items: CardapioItem[]) => {
  return items.reduce((acumulator, valor) => {
    return (acumulator += valor.preco)
  }, 0)
}

export const formataReal = (preco = 0) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}
