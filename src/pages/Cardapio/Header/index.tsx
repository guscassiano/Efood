import { Link } from 'react-router-dom'
import fundo from '../../../assets/images/fundo.png'
import logo from '../../../assets/images/logo.png'

import { HeaderSegundo } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../../store/reducers/cart'
import { RootReducer } from '../../../store'

const Hero = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }
  return (
    <HeaderSegundo style={{ backgroundImage: `url(${fundo})` }}>
      <div className="container">
        <h3>Restaurantes</h3>
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo" />
        </Link>
        <h3 onClick={openCart}>{items.length} produto(s) no carrinho</h3>
      </div>
    </HeaderSegundo>
  )
}

export default Hero
