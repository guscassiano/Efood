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
  tipo: string
  destacado?: boolean
  image: string
  note: number
  star?: string
  id: number
}

const Card = ({
  title,
  description,
  tipo,
  image,
  star,
  note,
  destacado,
  id
}: Props) => {
  return (
    <CardContainer>
      <div style={{ height: 217 }}>
        <img
          src={image}
          alt={title}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <Infos>
        {destacado && <Tag>Destaque da semana</Tag>}
        <Tag>{tipo}</Tag>
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
        <Botao to={`/${id}`}>Saiba mais</Botao>
      </Content>
    </CardContainer>
  )
}

export default Card
