import React from 'react';
import PaginaInicial from './components/PaginaInicial';
import Modal from './components/Modal';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      showComponent: false
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

  render () {
    return (
    <div>
      <PaginaInicial handleClickIn={this.handleClickIn}/>
      {this.state.showComponent && <Modal handleClickOut={this.handleClickOut}/>}
    </div>
    );
  }  
}