declare interface CardapioItem {
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
  id: number
}

declare type Prato = {
  nome: string | undefined
  foto: string | undefined
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: CardapioItem[]
}
