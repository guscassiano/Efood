import styled from 'styled-components'
import { Cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const CardContainer = styled.div`
  max-width: 472px;
  margin-bottom: 32px;
  position: relative;
  background-color: #fff;

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Content = styled.div`
  border: 1px solid ${Cores.laranja};
  border-top: none;
  padding: 8px;
  font-size: 14px;
`
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
  color: ${Cores.laranja};
`

export const Descricao = styled.p`
  margin: 16px 0;
  color: ${Cores.laranja};
  line-height: 22px;
`

export const Botao = styled(Link)`
  background-color: ${Cores.laranja};
  color: ${Cores.branco};
  padding: 4px 6px;
  text-decoration: none;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  div {
    position: absolute;
    display: flex;
    top: 0;
    right: 0;
    align-items: center;

    h3 {
      color: ${Cores.laranja};
      font-size: bold;
      font-size 18px;
      margin-right: 8px;
    }
  }
`
