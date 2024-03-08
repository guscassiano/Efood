import {
  AddButton,
  DescricaoOption,
  OptionContainer,
  TitleOption
} from './styles'

type Props = {
  description: string
  image: string
  title: string
}

const OptionCard = ({ description, image, title }: Props) => (
  <OptionContainer>
    <img src={image} alt={title} />
    <div>
      <TitleOption>{title}</TitleOption>
      <DescricaoOption>{description}</DescricaoOption>
    </div>
    <AddButton>Adicionar ao carrinho</AddButton>
  </OptionContainer>
)

export default OptionCard
