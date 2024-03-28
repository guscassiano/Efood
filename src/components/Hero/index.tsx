import fundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'

import { Header, TextHero } from './styles'

const Hero = () => (
  <Header style={{ backgroundImage: `url(${fundo})` }}>
    <div className="container">
      <img src={logo} alt="Logo" />
      <TextHero>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </TextHero>
    </div>
  </Header>
)

export default Hero
