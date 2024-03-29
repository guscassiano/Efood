import styled from 'styled-components'
import { Cores } from '../../../styles'

export const CartContainer = styled.div`
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

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`

export const SideBar = styled.aside`
  max-width: 360px;
  width: 100%;
  padding: 32px 8px 0;
  background-color: ${Cores.laranja};
  z-index: 1;
  font-size: 14px;

  > div {
    margin: 40px 0 16px;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    color: ${Cores.branco};
  }

  button {
    background-color: ${Cores.branco};
    color: ${Cores.laranja};
    width: 100%;
    padding: 4px 0;
    font-weight: bold;
    border: none;
    cursor: pointer;
  }
`

export const Item = styled.li`
  background-color: ${Cores.branco};
  display: flex;
  padding: 8px 8px 12px;
  position: relative;
  margin-bottom: 16px;

  > img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  div {
    display: block;
    color: ${Cores.laranja};

    h3 {
      font-size: 18px;
      font-weight: 900;
      margin-bottom: 16px;
    }
  }
`

export const Descarte = styled.img`
  position: absolute;
  bottom: 8px;
  right: 8px;
  cursor: pointer;
`

export const Close = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`
