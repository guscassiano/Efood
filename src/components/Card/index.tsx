import Tag from '../Tag'
import {
  Botao,
  CardContainer,
  Content,
  Descricao,
  Infos,
  TitleContainer,
  Titulo
} from './styles'

type Props = {
  title: string
  description: string
  infos: string[]
  image: string
  note: number
  star: string
}

const Card = ({ title, description, infos, image, star, note }: Props) => (
  <CardContainer>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Content>
      <TitleContainer>
        <Titulo>{title}</Titulo>
        <div>
          <h3>{note}</h3>
          <img src={star} alt="estrela" />
        </div>
      </TitleContainer>
      <Descricao>{description}</Descricao>
      <Botao to="/Cardapio">Saiba mais</Botao>
    </Content>
  </CardContainer>
)

export default Card
