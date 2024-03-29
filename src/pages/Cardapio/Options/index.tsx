import { useDispatch } from 'react-redux'

import * as S from './styles'
import { openModalItem } from '../../../store/reducers/modal'

type Props = {
  prato: CardapioItem
  openModal: (prato: CardapioItem) => void
}

const OptionCard = ({ openModal, prato }: Props) => {
  const dispatch = useDispatch()

  const abrirModal = () => {
    dispatch(openModalItem())
    openModal(prato)
  }
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
      <S.OptionContainer key={prato.id}>
        <img
          src={prato.foto}
          alt={prato.nome}
          style={{ width: '100%', height: 167 }}
        />
        <div>
          <S.TitleOption>{prato.nome}</S.TitleOption>
          <S.DescricaoOption>{getDescricao(prato.descricao)}</S.DescricaoOption>
        </div>
        <S.AddButton onClick={abrirModal}>Mais detalhes</S.AddButton>
      </S.OptionContainer>
    </div>
  )
}

export default OptionCard
