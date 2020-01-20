import React from 'react';
import PaginaInicial from './components/PaginaInicial';
import Modal from './components/Modal';
import Lista from './components/Lista';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      showComponent: false,
      nome: [],
      descricao: [],
      queroVer: [],
      jaVisto: [],
      imagem: [],
      stars: []
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

  getValue = (nome, descricao, queroVer, jaVisto, imagem, stars) => {
    this.setState({
      nome: nome,
      descricao: descricao,
      queroVer: queroVer,
      jaVisto: jaVisto,
      imagem: imagem,
      stars: stars

    })
  }

  render () {
    return (
    <div>
      <PaginaInicial handleClickIn={this.handleClickIn}/>
      {this.state.showComponent && <Modal getValue={this.getValue} handleClickOut={this.handleClickOut}/>}
      <Lista getValue={this.getValue}/>
    </div>
    );
  }  
}