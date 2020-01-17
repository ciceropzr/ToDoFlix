import React from 'react';
import styled from 'styled-components';
import capitao from './imagens/capitao-fantastico.svg';

export default class PaginaInicial extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <DivInicio>
        <div>
          <h1>ToDoFlix</h1>
          <p>categorias</p>
          <button onClick={this.props.handleClickIn}>adicionar filme</button>
        </div>
        <div>
          <img src={capitao} alt={'capitão fantástico'}/>
        </div>
      </DivInicio>
    )
  }
}

const DivInicio = styled.div`
  width: 100%;

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
    font-size: 40px;
    color: #C74350;
    flex-grow: 1;
  }

  p {
    width: 0;
    font-family: Open Sans;
    font-weight: normal;
    font-size: 16px;
    margin-right: 115px;
  }

  button {
    font-family: Open Sans;
    font-weight: normal;
    font-size: 15px;
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