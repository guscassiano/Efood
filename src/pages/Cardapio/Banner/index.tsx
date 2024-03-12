import { Prato } from '../../Home'
import { ContainerBanner, Img, TextBanner, TipoCozinha } from './styles'

type Props = {
  prato: Prato
}

const Banner = ({ prato }: Props) => (
  <Img style={{ backgroundImage: `url(${prato.capa})` }}>
    <ContainerBanner>
      <div className="container">
        <TipoCozinha>{prato.tipo}</TipoCozinha>
        <TextBanner>{prato.titulo}</TextBanner>
      </div>
    </ContainerBanner>
  </Img>
)

export default Banner
