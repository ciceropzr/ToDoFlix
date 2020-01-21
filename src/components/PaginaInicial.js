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
  max-width: 1440px;

  div:nth-of-type(1) {
    display: flex;
    padding: 3.6% 5% 2% 5%;
    align-items: center;
    justify-content: space-around;
    position: relative;
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
    font-family: Open Sans;
    font-weight: normal;
    font-size: 22px;
    margin-right: 140px;
    cursor: pointer;
    z-index: 1;
  }
    @media(max-width: 425px) {
      p {
       font-size: 24px;
      }
    }

  button {
    font-family: Open Sans;
    font-weight: normal;
    font-size: 22px;
    background: white;
    color: black;
    padding: 0.6% 1.4%;
    border-radius: 4px;
    border: 0;
    cursor: pointer;
  }

  @media(max-width: 425px) {
      button {
    font-size: 24px;
      }
  }
  @media(max-width: 360px) {
      button {
    margin-right: 115px;
      }
  }

  button:hover {
    background: #C74350;
    color: white;
  }

  img {
    height: 415px;
  }
    @media (max-width: 1440px){
      img {
        height: 440px;
      }
   }
`

const DivButton = styled.span`
  width: 10%;
  position: absolute;
  right: 361px;
  margin-top: 4%;
  display: flex;
  flex-wrap: wrap;

  @media(max-width: 355px) {
    right: 460px;
    margin-top: 5%;
  }

  button {
    color: black;
    background: white;
    border-radius: 0;
    box-shadow: 1px 1px 4px 0px black;
  }

  button:nth-of-type(1) {
    padding: 3% 20%;
    color: black;
    font-size: 15px;
  }

  @media(max-width: 355px) {
    button:nth-of-type(1) {
    padding: 3% 24%;
    }
  }

  button:nth-of-type(2) {
    padding: 3% 27.5%;
    color: black;
    font-size: 15px;
  }

  button:hover {
    background: #ECECEC;
    font-weight: 600;
  }
`