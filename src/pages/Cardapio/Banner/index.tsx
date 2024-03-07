import macarrao from '../../../assets/images/macarrao.png'
import { ContainerBanner, Img, TextBanner, TipoCozinha } from './styles'

const Banner = () => (
  <Img style={{ backgroundImage: `url(${macarrao})` }}>
    <ContainerBanner>
      <div className="container">
        <TipoCozinha>Italiana</TipoCozinha>
        <TextBanner>La Dolce Vita Trattoria</TextBanner>
      </div>
    </ContainerBanner>
  </Img>
)

export default Banner
