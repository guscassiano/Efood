import { CardapioItem } from '../../Home'

import {
  AddButton,
  DescricaoOption,
  OptionContainer,
  TitleOption
} from './styles'

type Props = {
  prato: CardapioItem
  openModal: () => void
}

const OptionCard = ({ openModal, prato }: Props) => {
  if (!prato) {
    return <h3>Carregando...</h3>
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 250) {
      return descricao.slice(0, 250) + '...'
    }
    return descricao
  }

  return (
    <div>
      <OptionContainer key={prato.id}>
        <img
          src={prato.foto}
          alt={prato.nome}
          style={{ width: '100%', height: 167 }}
        />
        <div>
          <TitleOption>{prato.nome}</TitleOption>
          <DescricaoOption>{getDescricao(prato.descricao)}</DescricaoOption>
        </div>
        <AddButton onClick={openModal}>Mais detalhes</AddButton>
      </OptionContainer>
    </div>
  )
}

export default OptionCard
