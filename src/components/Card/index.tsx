import Tag from '../Tag'
import * as S from './styles'

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
    <S.CardContainer>
      <div style={{ height: 217 }}>
        <img
          src={image}
          alt={title}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <S.Infos>
        {destacado && <Tag>Destaque da semana</Tag>}
        <Tag>{tipo}</Tag>
      </S.Infos>
      <S.Content>
        <S.TitleContainer>
          <S.Titulo>{title}</S.Titulo>
          <div>
            <h3>{note}</h3>
            <img src={star} alt="estrela" />
          </div>
        </S.TitleContainer>
        <S.Descricao>{description}</S.Descricao>
        <S.Botao to={`/${id}`}>Saiba mais</S.Botao>
      </S.Content>
    </S.CardContainer>
  )
}

export default Card
