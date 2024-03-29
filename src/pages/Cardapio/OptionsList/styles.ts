import styled from 'styled-components'
import { Cores, breakpoint } from '../../../styles'

export const OpList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin: 56px 0 120px;
  position: relative;

  @media (max-width: ${breakpoint.tablet}) {
    grid-template-columns: 1fr;
    margin-left: 27px;
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }

  .close {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const ModalContent = styled.div`
  max-width: 992px;
  padding: 32px;
  position: relative;
  z-index: 1;
  display: flex;
  background-color: ${Cores.laranja};
  color: ${Cores.branco};
  font-size: 14px;

  @media (max-width: ${breakpoint.tablet}) {
    display: block;

    h3 {
      margin-top: 8px;
    }
  }

  > img {
    margin-right: 24px;
    width: 280px;
    height: 280px;
    object-fit: fill;
  }

  h3 {
    font-weight: 900;
    font-size: 18px;
  }

  p {
    line-height: 22px;
    margin: 16px 0;
  }

  button {
    background-color: ${Cores.branco};
    color: ${Cores.laranja};
    font-weight: bold;
    border: none;
    padding: 4px 6px;
    cursor: pointer;
  }
`
