import { Link } from 'react-router-dom'
import fundo from '../../../assets/images/fundo.png'
import logo from '../../../assets/images/logo.png'

import { HeaderSegundo } from './styles'

const Hero = () => (
  <HeaderSegundo style={{ backgroundImage: `url(${fundo})` }}>
    <div className="container">
      <h3>Restaurantes</h3>
      <Link to="/" className="logo-link">
        <img src={logo} alt="Logo" />
      </Link>
      <h3>0 produto(s) no carrinho</h3>
    </div>
  </HeaderSegundo>
)

export default Hero
