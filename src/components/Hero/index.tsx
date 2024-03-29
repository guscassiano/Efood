import fundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'

import * as S from './styles'

const Hero = () => (
  <S.Header style={{ backgroundImage: `url(${fundo})` }}>
    <div className="container">
      <img src={logo} alt="Logo" />
      <S.TextHero>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </S.TextHero>
    </div>
  </S.Header>
)

export default Hero
