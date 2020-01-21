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
      }
      ],
      imagePreviewUrl: null
    }
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    const {nome, descricao, jaVisto, queroVer, imagePreviewUrl} = this.state;
    this.props.getValue(nome, descricao, jaVisto, queroVer, imagePreviewUrl)
    this.props.handleClickOut()
  }

  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {

    {this.state.imagePreviewUrl = (<ImgPreviewUrl src={this.state.imagePreviewUrl}/>)}

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
            {/* {this.read.onloadend} */}
              <p>adicionar uma imagem</p>
              <input 
              onChange={(e) => this.handleImageChange(e)} 
              type='file' 
              name="imagem"/>

            </label>
          </Form>
          <Div>
            <p>Nota:</p>
            <Avaliacao/>
            <div className="responsivo">
            <button onClick={this.props.handleClickOut}>cancelar</button>
            <button 
            onClick={this.handleSubmit}>feito
            </button>
            </div>
          </Div>
        </div>
      </ModalForm>
    )
  }
}
const ImgPreviewUrl = styled.img`
  width: 300px;
  @media(max-width: 768px) {
    width: 450px;
  }
  @media(max-width: 425px) {
    width: 600px;
  }
`

const ModalForm = styled.div`
  background: #00000030;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  align-items: center;

    .background {
      background: white;
      width: 600px;
      height: 435px;
      margin: 7% auto 0 auto;
      padding: 0.5% 2%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

    @media (max-width: 1024px) {
      .background {
      margin: 12% auto 0 auto;
      }
    }

      @media (max-width: 768px) {
        .background {
        height: 60%;
        } 
      }

      @media (max-width: 668px) {
        .background {
        height: 45%;
        } 
      }

      @media (max-width: 425px) {
        .background {
        width: 90%;
        margin: 15% auto 0 auto;
        } 
      }

    .claquete {
      width: 30%;
      padding-right: 2%;
    }
    @media (max-width: 768px){
      .claquete {
        display: none;
      } 
    }
`

const Form = styled.form`
  width: 70%;
  padding-left: 5%;
  display: flex;
  flex-wrap: wrap;
  font-family: Open Sans;
  font-weight: normal;

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 0;
    font-size: 20px;
  }

  @media (max-width: 375px) {
    font-size: 22px;
  }
  
    input {
      margin-bottom: 3%;
      width: 100%;
      height: 10%;
      border: 0;
      background: #6b6b6b10;
      border-radius: 3px;
      cursor: pointer;
    }
    @media(max-width: 425px) {
      input {
        font-size: 22px;
      }
    }

    span {
      width: 100%;
    }

    .jaVisto {
      width: 20px;
      margin-left: 60px;
      height: 5%;
    }

    .queroVer {
      width: 20px;
      height: 5%;
    }

    div {
      display: flex;
      margin-bottom: 10%;
      width: 100%;
    }

    @media(max-width: 425px) {
      div {
      margin-bottom: 5%;
     } 
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
    @media(max-width: 768px) {
      .sair {
      margin-left: 50%;
      }
    }
    @media(max-width: 425px) {
      .sair {
      margin-left: 78%;
      font-size: 22px;
      }
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
    width: 50%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 425px) {
    label p {
    width: 100%;
    margin-left: 0;
    border-radius: 3px;
    }
  }
`

const Div = styled.div`
  display: flex;
  width: 70%;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-left: 35%;
  margin-top: 2%;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }

  .responsivo {
    width: 100%;
  }

  @media(max-width: 768px) {
    .responsivo {
    margin-left: 65%;
    }
  }

  @media(max-width: 425px) {
    .responsivo {
    width: 100%;
    margin: 0;
    }
  }

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

  @media (max-width: 768px) {
    button:nth-of-type(1) {
    margin: 0 0 0 0;
    } 
  }
  @media (max-width: 425px) {
    button:nth-of-type(1) {
    width: 100%;
    font-size: 22px; 
    } 
  }

  button:nth-of-type(2) {
    border: 0;
    background: #75a9a4;
    border-radius: 3px;
    color: white;
    cursor: pointer;
  }

  @media (max-width: 425px) {
    button:nth-of-type(2) {
    width: 100%;
    font-size: 22px; 
    } 
  }
`