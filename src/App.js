import React from 'react';
import PaginaInicial from './components/PaginaInicial';
import Modal from './components/Modal';
import Lista from './components/Lista';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      showComponent: false,
      form: [
        {
        nome: '',
        descricao: '',
        queroVer: '',
        jaVisto: '',
      }
      ],
      imagePreviewUrl: ''
    }
  }

  handleClickIn = () => {
    this.setState({
      showComponent: true
    })
  }

  handleClickOut = () => {
    this.setState({
      showComponent: false
    })
  }

  getValue = (nome, descricao, queroVer, jaVisto, imagePreviewUrl) => {
    this.setState({
      form: [
        {
        nome: nome,
        descricao: descricao,
        queroVer: queroVer,
        jaVisto: jaVisto,
      }
      ],
      imagePreviewUrl: imagePreviewUrl
    })
  }

  render () {

    return (
    <div>
      <PaginaInicial handleClickIn={this.handleClickIn}/>
      {this.state.showComponent && <Modal getValue={this.getValue} handleClickOut={this.handleClickOut}/>}
      <Lista imagePreviewUrl={this.state.imagePreviewUrl} form={this.state.form}/>
    </div>
    );
  }  
}

