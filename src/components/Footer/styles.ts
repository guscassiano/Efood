import styled from 'styled-components'
import { Cores } from '../../styles'

export const Footer = styled.footer`
  background-color: ${Cores.branco};
  height: 298px;

  .container {
    padding-top: 40px;
    margin: 0 auto;
    max-width: 480px;
    text-align: center;
  }
`

export const SocialMedias = styled.div`
  margin: 32px 0 80px;

  .image {
    margin: 0 8px;
  }
`

export const TextFooter = styled.p`
  color: ${Cores.laranja};
  font-size: 10px;
`
