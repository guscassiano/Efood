import CardList from '../../components/CardList'
import Hero from '../../components/Hero'
import { Container } from '../../styles'
import { useGetRestaurantsQuery } from '../../services/api'

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
  const { data: cardapio } = useGetRestaurantsQuery()

  if (cardapio) {
    return (
      <>
        <Hero />
        <Container>
          <CardList pratos={cardapio} />
        </Container>
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
