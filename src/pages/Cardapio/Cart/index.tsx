import { useDispatch, useSelector } from 'react-redux'

import lixeira from '../../../assets/images/lixeira.png'
import { CartContainer, Descarte, Item, Overlay, SideBar } from './styles'

import { RootReducer } from '../../../store'
import { close, remove } from '../../../store/reducers/cart'
import { formataReal } from '../OptionsList'
import { closeModalItem } from '../../../store/reducers/modal'

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

  const getTotalPrice = () => {
    return items.reduce((acumulator, valor) => {
      return (acumulator += valor.preco)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ul>
          {items.map((prato) => (
            <>
              {console.log('ID do prato:', prato.id)}
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
            </>
          ))}
        </ul>
        <div>
          <p>Valor total</p>
          <p>{formataReal(getTotalPrice())}</p>
        </div>
        <button type="button">Continuar com a entrega</button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
