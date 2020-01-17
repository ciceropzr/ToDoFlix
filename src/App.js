import React from 'react';
import PaginaInicial from './components/PaginaInicial';
import Modal from './components/Modal';
import Lista from './components/Lista';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      showComponent: false,
      nome:'',
      descricao:''
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

  getValue = (nome, descricao) => {
    this.setState({
      nome: nome,
      descricao: descricao
    })
  }

  render () {
    return (
    <div>
      <PaginaInicial handleClickIn={this.handleClickIn}/>
      {this.state.showComponent && <Modal getValue={this.getValue} handleClickOut={this.handleClickOut}/>}
      <Lista/>
    </div>
    );
  }  
}