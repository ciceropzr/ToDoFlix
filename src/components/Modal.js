import React from 'react';
import styled from 'styled-components';
import claquete from './imagens/claquete.svg';
import Avaliacao from './Avaliacao';

export default class Modal extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      form: [
        {
        nome: '',
        descricao: '',
        queroVer: '',
        jaVisto: '',
        imagem: '',
        stars: ''
      }
      ]
    }
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    const {nome, descricao, jaVisto, queroVer, imagem, stars} = this.state;
    this.props.getValue(nome, descricao, jaVisto, queroVer, imagem, stars)
    this.props.handleClickOut()
  }

  render() {
    return(
      <ModalForm>
        <div className="background">
          <img className="claquete" src={claquete} alt={"claquete"}/>
          <Form onSubmit={this.handleSubmit}>
            <div>
              <h1>Adicionar novo filme:</h1>
              <p className="sair" onClick={this.props.handleClickOut}>X</p>
            </div>
            Nome:
            <input 
            onChange={(ev) => this.setState({nome: ev.target.value})} 
            type="text" 
            name="nome"/>
            Descrição:
            <input 
            onChange={(ev) => this.setState({descricao: ev.target.value})} 
            type="text" 
            name="descricao"/>
            <span>Status:</span>
            <input 
            onChange={(ev) => this.setState({queroVer: ev.target.value})} className="queroVer" 
            name="botao" 
            type="radio"/>Quero ver
            <input 
            onChange={(ev) => this.setState({jaVisto: ev.target.value})} className="jaVisto" 
            name="botao" 
            type="radio"/>Já visto
            <p className="imagemExibicaoTexto">Imagem de exibição:</p>
            <label>
              {this.state.imagem}
              <p>adicionar uma imagem</p>
              <input 
              onChange={(ev) => this.setState({imagem: ev.target.value})} 
              type='file' 
              name="imagem"/>
            </label>
          </Form>
          <Div>
            <p>Nota:</p>
            <Avaliacao/>
            <button onClick={this.props.handleClickOut}>cancelar</button>
            <button 
            onClick={this.handleSubmit}>feito
            </button>
          </Div>
        </div>
      </ModalForm>
    )
  }
}

const ModalForm = styled.div`
  background: #00000030;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;

    .background {
      background: white;
      width: 600px;
      height: 435px;
      margin: 0 auto;
      padding: 0.5% 2%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    .claquete {
      width: 30%;
      padding-right: 2%;
    }
`;

const Form = styled.form`
  width: 70%;
  padding-left: 5%;
  display: flex;
  flex-wrap: wrap;
  font-size: Open Sans;
  font-weight: normal;
  
    input {
      margin-bottom: 3%;
      width: 100%;
      height: 10%;
      border: 0;
      background: #6b6b6b10;
      border-radius: 3px;
      cursor: pointer;
    }

    span {
      width: 100%;
    }

    .jaVisto {
      width: 20px;
      margin-left: 60px;
    }

    .queroVer {
      width: 20px;
    }

    div {
      display: flex;
      margin-bottom: 10%;
      width: 100%;
    }

    h1 {
      font-size: 22px;
      font-family: Open Sans;
      font-weight: 600;
    }

  .sair {
    font-size: 22px;
    font-family: Open Sans;
    font-weight: 600;
    color: #00000030;
    margin-left: 32%;
    cursor: pointer;
  }

  .imagemExibicaoInput {
    height: 10%;
    width: 49%;
    border: 0;
    background: #6b6b6b10;
    border-radius: 3px;
  }

  button {
    font-family: Open Sans;
    font-weight: 600;
    font-size: 12px;
    width: 49%;
    height: 10%;
    border: 0;
    color: white;
    background: #75a9a4;
    border-radius: 3px;
    margin-left: 2%;
  }

  .imagemExibicaoTexto {
    width: 100%;
  }

  input[type='file'] {
  display: none;
}

  label {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-radius: 3px;
    cursor: pointer;
    margin-bottom: 3%;
    width: 100%;
    height: 10%;
    border: 0;
    background: #6b6b6b10;
  }
  label p {
    border-radius: 0 3px 3px 0;
    display: flex;
    margin-left: 10%;
    color: white;
    background: #75a9a4;
    font-family: Open Sans;
    font-weight: 600;
    font-size: 12px;
    width: 40%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }
`;

const Div = styled.div`
  display: flex;
  width: 70%;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-left: 35%;
  margin-top: 2%;

  p {
    width: 100%;
  }

  button {
    padding: 3% 15%;
  }

  button:nth-of-type(1) {
    border: 0;
    background: white;
    margin: 0 4% 0 14%;
    cursor: pointer;
  }

  button:nth-of-type(2) {
    border: 0;
    background: #75a9a4;
    border-radius: 3px;
    color: white;
    cursor: pointer;
  }
`