import CardList from '../../components/CardList'
import Hero from '../../components/Hero'
import { Container } from '../../styles'
import { useGetRestaurantsQuery } from '../../services/api'

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
