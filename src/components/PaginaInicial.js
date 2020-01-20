import React from 'react';
import styled from 'styled-components';
import capitao from './imagens/capitao-fantastico.svg';
export default class PaginaInicial extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      abrir: false
    }
  }

  openFilter = () => (
    this.setState({abrir:!this.state.abrir})
  )


  render() {
    return(
      <DivInicio>
        <div>
          <h1>ToDoFlix</h1>
          <p onClick={this.openFilter}>categorias</p>
          {this.state.abrir && (
          <DivButton>
            <button>Quero ver</button>
            <button>Já visto</button>
          </DivButton>
          )}
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
    font-weight: 900;
    font-size: 40px;
    color: #C74350;
    flex-grow: 1;
  }

  p {
    width: 0;
    font-family: Open Sans;
    font-weight: normal;
    font-size: 16px;
    margin-right: 125px;
    cursor: pointer;
    z-index: 1;
  }

  button {
    font-family: Open Sans;
    font-weight: normal;
    font-size: 15px;
    background: #f4ecf4;
    color: black;
    padding: 0.6% 1.4%;
    border-radius: 4px;
    border: 0;
    cursor: pointer;
  }

  button:hover {
    background: #C74350;
    color: white;
  }

  img {
    height: 420px;
  }
`

const DivButton = styled.div`
  width: 19%;
  position: absolute;
  right: 163px;
  margin-top: 3%;
  display: flex;
  flex-wrap: wrap;

  button {
    color: black;
    background: white;
    border-radius: 0;
  }

  button:nth-of-type(1) {
    padding: 3% 20%;
    color: black;
  }

  button:nth-of-type(2) {
    padding: 3% 29%;
    color: black;
  }

  button:hover {
    background: #ECECEC;
    font-weight: 600;
  }
`