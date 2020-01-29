import React from 'react';
import PaginaInicial from './components/PaginaInicial';
import Modal from './components/Modal';
import Lista from './components/Lista';
import Global from "./components/styles/Global";

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      showComponent: false,
      filmes: [ ],
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

  getValue = (filme) => {
    const { filmes } = this.state;

    console.log(filmes)
    filmes.push(filme)
    console.log(filmes)

    // this.setState({
    //   filmes: [
    //     {
    //     nome: nome,
    //     descricao: descricao,
    //     queroVer: queroVer,
    //     jaVisto: jaVisto,
    //     imagePreviewUrl: imagePreviewUrl
    //   }
    //   ],
    // })
  }

  render () {

    return (
    <div>
      <Global/>
      <PaginaInicial handleClickIn={this.handleClickIn}/>
      {this.state.showComponent && <Modal getValue={this.getValue} handleClickOut={this.handleClickOut}/>}
      <Lista filmes={this.state.filmes}/>
    </div>
    );
  }  
}

