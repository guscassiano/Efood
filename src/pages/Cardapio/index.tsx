import Hero from './Header'
import Banner from './Banner'
import OptionsList from './OptionsList'
import { Container } from '../../styles'

import { CardapioItem } from '../Home'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useGetBannerQuery } from '../../services/api'
import Cart from './Cart'
import DeliveryData from './DeliveryData'

const Cardapio = () => {
  const { id } = useParams()

  const [opcaoRestaurante, setOpcaoRestaurante] = useState<CardapioItem>()
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: opcaoBanner } = useGetBannerQuery(id!)
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  // const { data: opcaoRestaurante } = useGetMenuItemQuery(id!)

  useEffect(() => {
    if (id) {
      fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
        .then((res) => res.json())
        .then((res) => setOpcaoRestaurante(res.cardapio))
    }
  }, [id])

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
        <OptionsList prato={opcaoRestaurante} />
      </Container>
      <Cart />
      <DeliveryData />
    </>
  )
}

export default Cardapio
