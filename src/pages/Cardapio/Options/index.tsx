import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Prato } from '../../Home'

import {
  AddButton,
  DescricaoOption,
  OptionContainer,
  TitleOption
} from './styles'

type Props = {
  opcao: Prato
  openModal: () => void
}

const OptionCard = ({ opcao, openModal }: Props) => {
  const { id } = useParams()
  const [prato, setPrato] = useState<Prato>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setPrato(res))
  }, [id])

  if (!prato) {
    return <h3>Carregando...</h3>
  }

  return (
    <OptionContainer>
      <img src={opcao.cardapio.foto} alt={opcao.cardapio.nome} />
      <div>
        <TitleOption>{opcao.cardapio.nome}</TitleOption>
        <DescricaoOption>{opcao.cardapio.descricao}</DescricaoOption>
      </div>
      <AddButton onClick={openModal}>Mais detalhes</AddButton>
    </OptionContainer>
  )
}

export default OptionCard
