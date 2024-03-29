import * as S from './styles'

type Props = {
  prato: Prato
}

const Banner = ({ prato }: Props) => (
  <S.Img style={{ backgroundImage: `url(${prato.capa})` }}>
    <S.ContainerBanner>
      <div className="container">
        <S.TipoCozinha>{prato.tipo}</S.TipoCozinha>
        <S.TextBanner>{prato.titulo}</S.TextBanner>
      </div>
    </S.ContainerBanner>
  </S.Img>
)

export default Banner
