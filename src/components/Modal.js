import React from 'react';
import {ImgPreviewUrl, ModalForm, Form, Div} from './styles/ModalStyle';
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
    this.props.getValue({nome, descricao, jaVisto, queroVer, imagePreviewUrl});
    this.props.handleClickOut();
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
              onClick={this.handleSubmit}>feito</button>
            </div>
          </Div>
        </div>
      </ModalForm>
    )
  }
}