import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../../store'
import { close, remove } from '../../../store/reducers/cart'
import { formataReal } from '../../../utils'
import { closeModalItem } from '../../../store/reducers/modal'
import { getTotalPrice } from '../../../utils'

import lixeira from '../../../assets/images/lixeira.png'

import * as S from './styles'
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
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>
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
                  <S.Item key={prato.id}>
                    <img src={prato.foto} alt={prato.nome} />
                    <div>
                      <h3>{prato.nome}</h3>
                      <p>{formataReal(prato.preco)}</p>
                    </div>
                    <div>
                      <S.Descarte
                        src={lixeira}
                        alt="lixeira"
                        onClick={() => removePrato(prato.id)}
                      />
                    </div>
                  </S.Item>
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
      </S.SideBar>
    </S.CartContainer>
  )
}

export default Cart
