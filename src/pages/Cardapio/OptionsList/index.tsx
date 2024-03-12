import pizza from '../../../assets/images/pizza.png'
import fechar from '../../../assets/images/close 1.png'

import OptionCard from '../Options'
import { Modal, ModalContent, OpList } from './styles'
import { useState } from 'react'
import { Prato } from '../../Home'

type Props = {
  opcoes: Prato
}

const OptionsList = ({ opcoes }: Props) => {
  const [modal, setModal] = useState(false)

  const openModal = () => {
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
              key={opcao.cardapio.id}
              opcao={opcao}
              openModal={openModal}
            />
          ))}
      </OpList>
      <Modal className={modal ? 'visible' : ''}>
        <div className="overlay" onClick={() => closeModal()}></div>
        <ModalContent>
          <img src={pizza} alt="pizza" />
          <div className="close" onClick={() => closeModal()}>
            <img src={fechar} alt="Clique para fechar" />
          </div>
          <div>
            <h3>Pizza Marguerita</h3>
            <p>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião. <br /> <br />
              Serve: de 2 a 3 pessoas
            </p>
            <button>Adicionar ao carrinho - R$60,90</button>
          </div>
        </ModalContent>
      </Modal>
    </>
  )
}

export default OptionsList
