import styled from 'styled-components'
import { breakpoint } from '../../styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;

  @media (max-width: ${breakpoint.tablet}) {
    grid-template-columns: 1fr;
    width: 90%;
    margin: auto;
  }
`

export default List
