import styled from 'styled-components'
import { Cores } from '../../styles'

export const Header = styled.header`
  width: 100%;
  height: 384px;

  .container {
    top: 40px;
    position: relative;
    text-align: center;
  }
`

export const TextHero = styled.h1`
  color: ${Cores.laranja};
  font-size: 36px;
  font-weight: 900;
  margin-top: 160px;
`
