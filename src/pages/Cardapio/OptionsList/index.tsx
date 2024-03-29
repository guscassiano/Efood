import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import OptionCard from '../Options'
import * as S from './styles'

import { add, open } from '../../../store/reducers/cart'
import { RootReducer } from '../../../store'
import { closeModalItem } from '../../../store/reducers/modal'
import { formataReal } from '../../../utils'

import fechar from '../../../assets/images/close 1.png'

type Props = {
  prato: CardapioItem
}

const OptionsList = ({ prato }: Props) => {
  const isModalOpen = useSelector((state: RootReducer) => state.modal)
  const [maisDetalhes, setmaisDetalhes] = useState<CardapioItem | null>(null)

  const dispatch = useDispatch()

  const addCart = () => {
    if (maisDetalhes) {
      dispatch(add(maisDetalhes))
      dispatch(open())
    }
  }

  const closeModal = () => {
    dispatch(closeModalItem())
  }

  const openModal = (opcao: CardapioItem) => {
    setmaisDetalhes(opcao)
  }

  return (
    <>
      <S.OpList>
        {Array.isArray(prato) &&
          prato.map((opcao) => (
            <OptionCard
              key={opcao.id}
              prato={opcao}
              openModal={(opcao) => openModal(opcao)}
            />
          ))}
      </S.OpList>
      <S.Modal className={isModalOpen ? 'visible' : ''}>
        <div className="overlay" onClick={() => closeModal()}></div>
        <S.ModalContent>
          {maisDetalhes && (
            <>
              <img src={maisDetalhes.foto} alt={maisDetalhes.nome} />
              <div className="close" onClick={() => closeModal()}>
                <img src={fechar} alt="Clique para fechar" />
              </div>
              <div>
                <h3>{maisDetalhes.nome}</h3>
                <p>
                  {maisDetalhes.descricao}
                  <br /> <br />
                  Serve: de {maisDetalhes.porcao}
                </p>
                <button onClick={addCart}>
                  Adicionar ao carrinho - {formataReal(maisDetalhes.preco)}
                </button>
              </div>
            </>
          )}
        </S.ModalContent>
      </S.Modal>
    </>
  )
}

export default OptionsList
