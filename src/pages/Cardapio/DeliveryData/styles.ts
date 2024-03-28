import styled from 'styled-components'
import { Cores } from '../../../styles'

export const DataContainer = styled.div`
  position: relative;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const DataSideBar = styled.aside`
  max-width: 360px;
  width: 100%;
  padding: 32px 8px 0;
  background-color: ${Cores.laranja};
  z-index: 1;
  font-size: 14px;
  color: ${Cores.branco};
  font-weight: bold;

  h3 {
    margin-bottom: 16px;
  }
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  input {
    background-color: ${Cores.branco};
    height: 32px;
    border: none;
    margin: 8px 0;
    padding: 0 8px;
    font-weight: bold;
  }
`

export const GroupCpfNumber = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${InputGroup} {
    max-width: 155px;
  }
`

export const DataButtonContainer = styled.div`
  margin-top: 24px;
  display: block;
  justify-content: space-between;

  button {
    background-color: ${Cores.branco};
    color: ${Cores.laranja};
    width: 100%;
    padding: 4px 0;
    border: none;
    cursor: pointer;
    margin-bottom: 8px;
    font-weight: bold;
  }
`

export const CardNumberField = styled.div`
  display: flex;
  flex-direction: column;
  width: 228px;

  input {
    background-color: ${Cores.branco};
    height: 32px;
    border: none;
    margin: 8px 0;
    padding: 0 8px;
    font-weight: bold;
  }
`

export const CvvField = styled(InputGroup)`
  width: 87px;
`

export const Message = styled.p`
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
`
