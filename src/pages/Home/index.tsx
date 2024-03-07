import CardList from '../../components/CardList'
import Hero from '../../components/Hero'
import Prato from '../../models/Prato'
import { Container } from '../../styles'

import sushi from '../../assets/images/sushi.png'
import estrela from '../../assets/images/estrela.svg'
import macarrao from '../../assets/images/macarrao.png'

const cardapio: Prato[] = [
  {
    id: 1,
    image: sushi,
    infos: ['Destaque da semana', 'Japonesa'],
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    note: 4.9,
    star: estrela
  },
  {
    id: 2,
    image: macarrao,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    note: 4.6,
    star: estrela
  },
  {
    id: 3,
    image: sushi,
    infos: ['Japonesa'],
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    note: 4.9,
    star: estrela
  },
  {
    id: 4,
    image: macarrao,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    note: 4.6,
    star: estrela
  },
  {
    id: 5,
    image: sushi,
    infos: ['Japonesa'],
    title: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    note: 4.9,
    star: estrela
  },
  {
    id: 6,
    image: macarrao,
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    note: 4.6,
    star: estrela
  }
]

const Home = () => {
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
