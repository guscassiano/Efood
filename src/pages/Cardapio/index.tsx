import Hero from './Header'
import Banner from './Banner'
import OptionsList from './OptionsList'
import { Container } from '../../styles'

import { useParams } from 'react-router-dom'
import { useGetBannerQuery, useGetMenuItemQuery } from '../../services/api'
import Cart from './Cart'
import DeliveryData from './DeliveryData'

type PratoParams = {
  id: string
}

const Cardapio = () => {
  const { id } = useParams() as PratoParams

  const { data: opcaoBanner } = useGetBannerQuery(id)

  const { data: opcaoRestaurante } = useGetMenuItemQuery(id)

  if (!opcaoRestaurante) {
    return <h3>Carregando...</h3>
  }

  if (!opcaoBanner) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Hero />
      <Banner prato={opcaoBanner} />
      <Container>
        <OptionsList prato={opcaoRestaurante.cardapio} />
      </Container>
      <Cart />
      <DeliveryData />
    </>
  )
}

export default Cardapio
