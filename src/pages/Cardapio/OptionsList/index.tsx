import fechar from '../../../assets/images/close 1.png'

import OptionCard from '../Options'
import { Modal, ModalContent, OpList } from './styles'
import { useState } from 'react'
import { CardapioItem } from '../../Home'
import { useDispatch } from 'react-redux'
import { add, open } from '../../../store/reducers/cart'

type Props = {
  prato: CardapioItem
}

export const formataReal = (preco = 0) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const OptionsList = ({ prato }: Props) => {
  const [modal, setModal] = useState(false)
  const [maisDetalhes, setmaisDetalhes] = useState<CardapioItem | null>(null)

  const dispatch = useDispatch()

  const addCart = () => {
    dispatch(add(prato))
    dispatch(open())
  }

  const openModal = (opcao: CardapioItem) => {
    setmaisDetalhes(opcao)
    setModal(true)
  }

  const closeModal = () => {
    setModal(false)
  }

  return (
    <>
      <OpList>
        {Array.isArray(prato) &&
          prato.map((opcao) => (
            <OptionCard
              key={opcao.id}
              prato={opcao}
              openModal={() => openModal(opcao)}
            />
          ))}
      </OpList>
      <Modal className={modal ? 'visible' : ''}>
        <div className="overlay" onClick={() => closeModal()}></div>
        <ModalContent>
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
        </ModalContent>
      </Modal>
    </>
  )
}

export default OptionsList
