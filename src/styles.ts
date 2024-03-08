import styled, { createGlobalStyle } from 'styled-components'

export const Cores = {
  laranja: '#E66767',
  branco: '#FFEBD9'
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
  max-width: 1024px;
  margin: 80px auto;
`
