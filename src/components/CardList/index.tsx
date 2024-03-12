import { Prato } from '../../pages/Home'
import Card from '../Card'
import List from './styles'
import star from '../../assets/images/estrela.svg'

type Props = {
  pratos: Prato[]
}

const CardList = ({ pratos }: Props) => (
  <List>
    {pratos.map((prato) => (
      <Card
        key={prato.id}
        description={prato.descricao}
        image={prato.capa}
        tipo={prato.tipo}
        destacado={prato.destacado}
        title={prato.titulo}
        note={prato.avaliacao}
        star={star}
        id={prato.id}
      />
    ))}
  </List>
)

export default CardList
