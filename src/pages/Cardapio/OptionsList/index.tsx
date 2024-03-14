import fechar from '../../../assets/images/close 1.png'

import OptionCard from '../Options'
import { Modal, ModalContent, OpList } from './styles'
import { useState } from 'react'
import { CardapioItem } from '../../Home'

type Props = {
  opcoes: CardapioItem
}

const OptionsList = ({ opcoes }: Props) => {
  const [modal, setModal] = useState(false)
  const [maisDetalhes, setmaisDetalhes] = useState<CardapioItem | null>(null)

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
        {Array.isArray(opcoes) &&
          opcoes.map((opcao) => (
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
                <button>Adicionar ao carrinho - {maisDetalhes.preco}</button>
              </div>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default OptionsList
