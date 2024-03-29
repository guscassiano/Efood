import { useDispatch, useSelector } from 'react-redux'

import fundo from '../../../assets/images/fundo.png'
import logo from '../../../assets/images/logo.png'

import { open } from '../../../store/reducers/cart'
import { RootReducer } from '../../../store'

import * as S from './styles'

const Hero = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <S.HeaderSegundo style={{ backgroundImage: `url(${fundo})` }}>
      <div className="container">
        <S.RestaurantButton to="/">
          <h3>Restaurantes</h3>
        </S.RestaurantButton>
        <img src={logo} alt="Logo" className="logo-link" />
        <h3 onClick={openCart}>{items.length} produto(s) no carrinho</h3>
      </div>
    </S.HeaderSegundo>
  )
}

export default Hero
