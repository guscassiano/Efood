import { useEffect, useState } from 'react'
import CardList from '../../components/CardList'
import Hero from '../../components/Hero'
import { Container } from '../../styles'

export type Prato = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    nome: string
    descricao: string
    porcao: string
    id: number
  }
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
