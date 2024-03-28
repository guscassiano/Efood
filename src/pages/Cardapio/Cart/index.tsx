import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../../store'
import { close, remove } from '../../../store/reducers/cart'
import { formataReal } from '../OptionsList'
import { closeModalItem } from '../../../store/reducers/modal'
import { getTotalPrice } from '../../../components/utils'

import lixeira from '../../../assets/images/lixeira.png'

import { CartContainer, Descarte, Item, Overlay, SideBar } from './styles'
import { openDataItem } from '../../../store/reducers/data'
import { Cores } from '../../../styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
    dispatch(closeModalItem())
  }

  const removePrato = (id: number) => {
    dispatch(remove(id))
  }

  const openData = () => {
    dispatch(openDataItem())
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        {items.length === 0 ? (
          <h1 style={{ color: Cores.branco, textAlign: 'center' }}>
            Seu carrinho se encontra vazio, acrescente pelo menos um item para
            prosseguir com a compra.
          </h1>
        ) : (
          <>
            <ul>
              {items.map((prato) => {
                return (
                  <Item key={prato.id}>
                    <img src={prato.foto} alt={prato.nome} />
                    <div>
                      <h3>{prato.nome}</h3>
                      <p>{formataReal(prato.preco)}</p>
                    </div>
                    <div>
                      <Descarte
                        src={lixeira}
                        alt="lixeira"
                        onClick={() => removePrato(prato.id)}
                      />
                    </div>
                  </Item>
                )
              })}
            </ul>
            <div>
              <p>Valor total</p>
              <p>{formataReal(getTotalPrice(items))}</p>
            </div>
            <button type="button" onClick={openData}>
              Continuar com a entrega
            </button>
          </>
        )}
      </SideBar>
    </CartContainer>
  )
}

export default Cart
