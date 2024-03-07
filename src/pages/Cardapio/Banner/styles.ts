import styled from 'styled-components'
import { Cores } from '../../../styles'

export const Img = styled.div`
  height: 280px;
  backgorund-repeat: none;
  background-size: cover;
  position: relative;
`

export const TextBanner = styled.h1`
  color: ${Cores.branco};
  font-size: 32px;
  font-weight: 900;
  padding-top: 160px;
  margin-left: 170px;
`

export const TipoCozinha = styled.h3`
  color: ${Cores.branco};
  font-weight: 100;
  font-size: 32px;
  padding-top: 16px;
  margin-left: 170px;
`

export const ContainerBanner = styled.div`
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`
