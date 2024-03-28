import { CardapioItem } from '../../pages/Home'

export const getTotalPrice = (items: CardapioItem[]) => {
  return items.reduce((acumulator, valor) => {
    return (acumulator += valor.preco)
  }, 0)
}
