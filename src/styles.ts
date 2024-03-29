import styled, { createGlobalStyle } from 'styled-components'

export const Cores = {
  laranja: '#E66767',
  branco: '#FFEBD9'
}

export const breakpoint = {
  tablet: '768px',
  desktop: '1024px;'
}

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border-box: box-sizing;
    font-family: "Roboto", sans-serif;
    list-style: none;
  }


  body {
    background-color: #FFF8F2;
    ;
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: ${breakpoint.desktop};
  margin: 80px auto;

  media(max-width: ${breakpoint.tablet}) {
    width: 80%;
  }
`
