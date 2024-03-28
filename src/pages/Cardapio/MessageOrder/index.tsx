import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../../store'
import { finishOrder } from '../../../store/reducers/data'
import { close } from '../../../store/reducers/cart'

import * as S from '../DeliveryData/styles'
import { closeModalItem } from '../../../store/reducers/modal'
import { Message } from './styles'
import { usePurchaseMutation } from '../../../services/api'
import { clear } from '../../../store/reducers/cart'

const MessageOrder = () => {
  const { isSuccessMessage } = useSelector((state: RootReducer) => state.data)
  const [, { data }] = usePurchaseMutation()
  const dispatch = useDispatch()

  const finishAll = () => {
    dispatch(finishOrder())
    dispatch(close())
    dispatch(closeModalItem())
    dispatch(clear())
  }

  return (
    <S.DataContainer className={isSuccessMessage ? 'is-open' : ''}>
      <S.DataSideBar>
        <h3>Pedido realizado - ${data?.orderId}</h3>
        <div>
          <Message>
            Estamos felizes em informar que seu pedido já está em processo de
            preparação e, em breve, será entregue no endereço fornecido.
            <br />
            <br />
            Gostaríamos de ressaltar que nossos entregadores não estão
            autorizados a realizar cobranças extras.
            <br />
            <br />
            Lembre-se da importância de higienizar as mãos após o recebimento do
            pedido, garantindo assim sua segurança e bem-estar durante a
            refeição.
            <br />
            <br />
            Esperamos que desfrute de uma deliciosa e agradável experiência
            gastronômica. Bom apetite!
          </Message>
        </div>
        <S.DataButtonContainer>
          <button onClick={finishAll}>Concluir</button>
        </S.DataButtonContainer>
      </S.DataSideBar>
    </S.DataContainer>
  )
}

export default MessageOrder
