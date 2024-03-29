import { Link } from 'react-router-dom'

import styled from 'styled-components'
import { Cores, breakpoint } from '../../../styles'

export const HeaderSegundo = styled.header`
  width: 100%;
  height: 186px;

  .container {
    display: flex;
    padding-top: 40px;
    margin: 0 auto;
    max-width: 1024px;
    align-items: center;
    justify-content: space-between;
  }

  .logo-link {
    margin-left: 74px;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    color: ${Cores.laranja};
    cursor: pointer;
  }

  @media (max-width: ${breakpoint.tablet}) {
    .container {
      display: block;
      width: 80%;
      text-align: center;
    }

    .logo-link {
      display: none;
    }

    h3 {
      font-size: 24px;
      font-weight: 900;
      color: ${Cores.laranja};
      cursor: pointer;
      margin-bottom: 36px;
    }
  }
`

export const RestaurantButton = styled(Link)`
  text-decoration: none;
`
