import { useEffect, useState } from 'react'
import CardList from '../../components/CardList'
import Hero from '../../components/Hero'
import { Container } from '../../styles'

export interface CardapioItem {
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
  id: number
}

export type Prato = {
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

const Home = () => {
  const [cardapio, setCardapio] = useState<Prato[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setCardapio(res))
  }, [])

  return (
    <>
      <Hero />
      <Container>
        <CardList pratos={cardapio} />
      </Container>
    </>
  )
}

export default Home
