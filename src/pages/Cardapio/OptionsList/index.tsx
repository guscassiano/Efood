import Opcao from '../../../models/opcao'
import OptionCard from '../Options'
import OpList from './styles'

type Props = {
  opcoes: Opcao[]
}

const OptionsList = ({ opcoes }: Props) => (
  <OpList>
    {opcoes.map((opcao) => (
      <OptionCard
        key={opcao.id}
        title={opcao.title}
        description={opcao.description}
        image={opcao.image}
      />
    ))}
  </OpList>
)

export default OptionsList
