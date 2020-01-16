import React from 'react';
import styled from 'styled-components';
import capitao from './imagens/capitao-fantastico.svg';

export default class PaginaInicial extends React.Component {

  render() {
    return(
      <Div>
        <div>
          <h1>ToDoFlix</h1>
          <p>categorias</p>
          <button>adicionar filme</button>
        </div>
        <div>
          <img src={capitao} alt={'capitão fantástico'}/>
        </div>
      </Div>
    )
  }
}

const Div = styled.div`
  width: 100%;
  /* overflow-x: hidden; */

  div:nth-of-type(1) {
    display: flex;
    padding: 3.6% 5% 2% 5%;
    align-items: center;
    justify-content: space-around;
  }

  h1 {
    width: 0;
    font-family: Open Sans;
    font-weight: 800;
    font-size: 48px;
    color: #C74350;
    flex-grow: 1;
  }

  p {
    width: 0;
    font-family: Open Sans;
    font-weight: normal;
    font-size: 20px;
    margin-right: 150px;
  }

  button {
    font-family: Open Sans;
    font-weight: normal;
    font-size: 20px;
    background: #C74350;
    color: white;
    padding: 0.6% 1.6%;
    border-radius: 4px;
    border: 0;
  }

  img {
    height: 420px;
  }
`