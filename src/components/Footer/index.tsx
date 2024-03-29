import logo from '../../assets/images/logo.png'
import facebook from '../../assets/images/facebook.svg'
import instagram from '../../assets/images/instagram.svg'
import twitter from '../../assets/images/twitter.svg'

import * as S from './styles'

const Footer = () => (
  <S.Footer>
    <div className="container">
      <img src={logo} alt="Efood" />
      <S.SocialMedias>
        <img src={facebook} alt="facebook" />
        <img className="image" src={instagram} alt="instagram" />
        <img src={twitter} alt="twitter" />
      </S.SocialMedias>
      <S.TextFooter>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </S.TextFooter>
    </div>
  </S.Footer>
)

export default Footer
