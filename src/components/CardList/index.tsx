import Prato from '../../models/Prato'
import Card from '../Card'
import List from './styles'

type Props = {
  pratos: Prato[]
}

const CardList = ({ pratos }: Props) => (
  <List>
    {pratos.map((prato) => (
      <Card
        key={prato.id}
        description={prato.description}
        image={prato.image}
        infos={prato.infos}
        title={prato.title}
        note={prato.note}
        star={prato.star}
      />
    ))}
  </List>
)

export default CardList
