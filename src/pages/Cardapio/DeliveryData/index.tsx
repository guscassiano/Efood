import { useDispatch, useSelector } from 'react-redux'
import InputMask from 'react-input-mask'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { RootReducer } from '../../../store'
import {
  closeDataItem,
  finishOrder,
  openPaymentArea,
  openSuccessMessage
} from '../../../store/reducers/data'

import { closePaymentArea } from '../../../store/reducers/data'
import {
  usePurchaseMutation,
  useSecondPurchaseMutation
} from '../../../services/api'

import { CardNumberField, CvvField } from './styles'

import * as S from './styles'
import { getTotalPrice } from '../../../utils'
import { formataReal } from '../../../utils'
import { clear, close } from '../../../store/reducers/cart'
import { closeModalItem } from '../../../store/reducers/modal'

const DeliveryData = () => {
  const { isDataOpen, isPaymentAreaOpen, isSuccessMessage } = useSelector(
    (state: RootReducer) => state.data
  )
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [purchase] = usePurchaseMutation()
  const [secondPurchase, { data, isLoading }] = useSecondPurchaseMutation()

  const form = useFormik({
    initialValues: {
      whoReceive: '',
      address: '',
      city: '',
      cepCode: '',
      houseNumber: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cvvCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      whoReceive: Yup.string()
        .min(5, 'Digite um nome com mais de 5 caractéres')
        .required('O campo acima é obrigatório'),
      address: Yup.string()
        .min(5, 'Digite um endereço válido')
        .required('O campo acima é obrigatório'),
      city: Yup.string().required('O campo acima é obrigatório'),
      cepCode: Yup.string()
        .min(9, 'Digite um CEP válido')
        .required('CEP obrigatório'),
      houseNumber: Yup.string().required('O campo acima é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.whoReceive,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cepCode,
            number: Number(values.houseNumber),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cvvCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
    }
  })

  const secondForm = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cvvCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      cardName: Yup.string()
        .min(5, 'Digite um nome com mais de 5 caractéres')
        .required('O campo acima é obrigatório'),
      cardNumber: Yup.string()
        .min(19, 'Digite um número de cartão válido')
        .max(19, 'Digite um número de cartão válido')
        .required('O campo acima é obrigatório'),
      cvvCode: Yup.string()
        .min(3, 'Digite um CVV válido')
        .max(3, 'Digite um CVV válido')
        .required('O campo acima é obrigatório'),
      expiresMonth: Yup.string()
        .min(1, 'Digite um mês válido')
        .max(2, 'Digite um mês válido')
        .required('O campo acima é obrigatório'),
      expiresYear: Yup.string()
        .min(4, 'Digite um ano válido')
        .max(4, 'Digite um ano válido')
        .required('O campo acima é obrigatório')
    }),
    onSubmit: (values) => {
      secondPurchase({
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cvvCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  const getErrorMessageSecondForm = (fieldName: string, message?: string) => {
    const isTouched = fieldName in secondForm.touched
    const isInvalid = fieldName in secondForm.errors

    if (isTouched && isInvalid) return message
    return ''
  }

  const dispatch = useDispatch()

  const backToCart = () => {
    dispatch(closeDataItem())
  }

  const openPayment = () => {
    if (form.dirty) {
      dispatch(openPaymentArea())
    } else {
      dispatch(closePaymentArea())
    }
  }

  const closePayment = () => {
    dispatch(closePaymentArea())
  }

  const successMessage = () => {
    dispatch(openSuccessMessage())
  }

  const finishAll = () => {
    dispatch(finishOrder())
    dispatch(close())
    dispatch(closeModalItem())
    dispatch(clear())
  }

  return (
    <>
      <form onSubmit={form.handleSubmit}>
        <S.DataContainer className={isDataOpen ? 'is-open' : ''}>
          <S.DataSideBar>
            <h3>Entrega</h3>
            <S.InputGroup>
              <label htmlFor="whoReceive">Quem irá receber</label>
              <input
                type="text"
                id="whoReceive"
                name="whoReceive"
                value={form.values.whoReceive}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small style={{ color: 'black' }}>
                {getErrorMessage('whoReceive', form.errors.whoReceive)}
              </small>
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="address">Endereço</label>
              <input
                type="text"
                id="address"
                name="address"
                value={form.values.address}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small style={{ color: 'black' }}>
                {getErrorMessage('address', form.errors.address)}
              </small>
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="city">Cidade</label>
              <input
                type="text"
                id="city"
                name="city"
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small style={{ color: 'black' }}>
                {getErrorMessage('city', form.errors.city)}
              </small>
            </S.InputGroup>
            <div>
              <S.GroupCpfNumber>
                <S.InputGroup>
                  <label htmlFor="cepCode">CEP</label>
                  <InputMask
                    type="text"
                    id="cepCode"
                    name="cepCode"
                    value={form.values.cepCode}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    mask={'99999-999'}
                  />
                  <small style={{ color: 'black' }}>
                    {getErrorMessage('cepCode', form.errors.cepCode)}
                  </small>
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="houseNumber">Número</label>
                  <input
                    type="text"
                    id="houseNumber"
                    name="houseNumber"
                    value={form.values.houseNumber}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small style={{ color: 'black' }}>
                    {getErrorMessage('houseNumber', form.errors.houseNumber)}
                  </small>
                </S.InputGroup>
              </S.GroupCpfNumber>
            </div>
            <S.InputGroup>
              <label htmlFor="complement">Complemento (opcional)</label>
              <input
                type="text"
                id="complement"
                name="complement"
                value={form.values.complement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </S.InputGroup>
            <S.DataButtonContainer>
              <button type="submit" onClick={openPayment}>
                Continuar com o pagamento
              </button>
              <button onClick={backToCart}>Voltar para o carrinho</button>
            </S.DataButtonContainer>
          </S.DataSideBar>
        </S.DataContainer>
      </form>
      <form onSubmit={secondForm.handleSubmit}>
        <S.DataContainer
          className={isPaymentAreaOpen && form.isValid ? 'is-open' : ''}
        >
          <S.DataSideBar>
            <h3>
              Pagamento - Valor a pagar {formataReal(getTotalPrice(items))}
            </h3>
            <S.InputGroup>
              <label htmlFor="cardName">Nome no cartão</label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                value={secondForm.values.cardName}
                onChange={secondForm.handleChange}
                onBlur={secondForm.handleBlur}
              />
              <small style={{ color: 'black' }}>
                {getErrorMessageSecondForm(
                  'cardName',
                  secondForm.errors.cardName
                )}
              </small>
            </S.InputGroup>
            <div>
              <S.GroupCpfNumber>
                <CardNumberField>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <InputMask
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={secondForm.values.cardNumber}
                    onChange={secondForm.handleChange}
                    onBlur={secondForm.handleBlur}
                    mask={'9999 9999 9999 9999'}
                  />
                  <small style={{ color: 'black' }}>
                    {getErrorMessageSecondForm(
                      'cardNumber',
                      secondForm.errors.cardNumber
                    )}
                  </small>
                </CardNumberField>
                <CvvField>
                  <label htmlFor="cvvCode">CVV</label>
                  <InputMask
                    type="text"
                    id="cvvCode"
                    name="cvvCode"
                    value={secondForm.values.cvvCode}
                    onChange={secondForm.handleChange}
                    onBlur={secondForm.handleBlur}
                    mask={'999'}
                  />
                  <small style={{ color: 'black' }}>
                    {getErrorMessageSecondForm(
                      'cvvCode',
                      secondForm.errors.cvvCode
                    )}
                  </small>
                </CvvField>
              </S.GroupCpfNumber>
            </div>
            <div>
              <S.GroupCpfNumber>
                <S.InputGroup>
                  <label htmlFor="expiresMonth">Mês de vencimento</label>
                  <InputMask
                    type="text"
                    id="expiresMonth"
                    name="expiresMonth"
                    value={secondForm.values.expiresMonth}
                    onChange={secondForm.handleChange}
                    onBlur={secondForm.handleBlur}
                    mask={'99'}
                    max={12}
                  />
                  <small style={{ color: 'black' }}>
                    {getErrorMessageSecondForm(
                      'expiresMonth',
                      secondForm.errors.expiresMonth
                    )}
                  </small>
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="expiresYear">Ano de vencimento</label>
                  <InputMask
                    type="text"
                    id="expiresYear"
                    name="expiresYear"
                    value={secondForm.values.expiresYear}
                    onChange={secondForm.handleChange}
                    onBlur={secondForm.handleBlur}
                    mask={'9999'}
                  />
                  <small style={{ color: 'black' }}>
                    {getErrorMessageSecondForm(
                      'expiresYear',
                      secondForm.errors.expiresYear
                    )}
                  </small>
                </S.InputGroup>
              </S.GroupCpfNumber>
            </div>
            <S.DataButtonContainer>
              <button type="submit" onClick={successMessage}>
                {isLoading
                  ? 'Finalizando o pagamento, aguarde...'
                  : 'Finalizar o pagamento'}
              </button>
              <button type="button" onClick={closePayment}>
                Voltar para a edição de endereço
              </button>
            </S.DataButtonContainer>
          </S.DataSideBar>
        </S.DataContainer>
      </form>
      {data && data.orderId && (
        <>
          <S.DataContainer className={isSuccessMessage ? 'is-open' : ''}>
            <S.DataSideBar>
              <h3>Pedido realizado - {data.orderId}</h3>
              <div>
                <S.Message>
                  Estamos felizes em informar que seu pedido já está em processo
                  de preparação e, em breve, será entregue no endereço
                  fornecido.
                  <br />
                  <br />
                  Gostaríamos de ressaltar que nossos entregadores não estão
                  autorizados a realizar cobranças extras.
                  <br />
                  <br />
                  Lembre-se da importância de higienizar as mãos após o
                  recebimento do pedido, garantindo assim sua segurança e
                  bem-estar durante a refeição.
                  <br />
                  <br />
                  Esperamos que desfrute de uma deliciosa e agradável
                  experiência gastronômica. Bom apetite!
                </S.Message>
              </div>
              <S.DataButtonContainer>
                <button onClick={finishAll}>Concluir</button>
              </S.DataButtonContainer>
            </S.DataSideBar>
          </S.DataContainer>
        </>
      )}
    </>
  )
}

export default DeliveryData
