import Hero from './Header'
import Banner from './Banner'
import OptionsList from './OptionsList'
import { Container } from '../../styles'

import { CardapioItem, Prato } from '../Home'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Cardapio = () => {
  const { id } = useParams()
  const [opcaoRestaurante, setOpcaoRestaurante] = useState<CardapioItem>()
  const [opcaoBanner, setOpcaoBanner] = useState<Prato>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setOpcaoRestaurante(res.cardapio))

    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setOpcaoBanner(res))
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
        <OptionsList opcoes={opcaoRestaurante} />
      </Container>
    </>
  )
}

export default Cardapio
