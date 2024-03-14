import styled from 'styled-components'
import { Cores } from '../../../styles'

export const OptionContainer = styled.div`
  max-width: 304px;
  width: 100%;
  background-color: ${Cores.laranja};
  color: ${Cores.branco};
  padding: 8px;
  font-size: 14px;
`

export const TitleOption = styled.h3`
  font-size: 16px;
  font-weight: 900;
  margin-top: 8px;
`

export const DescricaoOption = styled.p`
  margin: 8px 0;
  line-height: 22px;
`

export const AddButton = styled.button`
  background-color: ${Cores.branco};
  color: ${Cores.laranja};
  padding: 4px;
  width: 100%;
  cursor: pointer;
  border: none;
  font-weight: bold;
`
