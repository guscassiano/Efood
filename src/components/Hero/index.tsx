import { Link } from 'react-router-dom'
import fundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'

import { Header, TextHero } from './styles'

const Hero = () => (
  <Header style={{ backgroundImage: `url(${fundo})` }}>
    <div className="container">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <TextHero>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </TextHero>
    </div>
  </Header>
)

export default Hero
