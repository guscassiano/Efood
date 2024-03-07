import logo from '../../assets/images/logo.png'
import facebook from '../../assets/images/facebook.svg'
import instagram from '../../assets/images/instagram.svg'
import twitter from '../../assets/images/twitter.svg'

import { Rodape, SocialMedias, TextFooter } from './styles'
import { Link } from 'react-router-dom'

const Footer = () => (
  <Rodape>
    <div className="container">
      <Link to="/">
        <img src={logo} alt="Efood" />
      </Link>
      <SocialMedias>
        <img src={facebook} alt="facebook" />
        <img className="image" src={instagram} alt="instagram" />
        <img src={twitter} alt="twitter" />
      </SocialMedias>
      <TextFooter>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </TextFooter>
    </div>
  </Rodape>
)

export default Footer
