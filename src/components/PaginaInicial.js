import React from 'react';
import {DivInicio, DivButton, LogoMenu, Menu, AdicionarFilme, Div, Span, Img} from './styles/PaginaInicialStyle';
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
        <LogoMenu>
          <h1>ToDoFlix</h1>
          <Menu>
            <p onClick={this.openFilter}>categorias</p>
            {this.state.abrir && (
            <DivButton>
              <button className="menuDrop">Quero ver</button>
              <button className="menuDrop">Já visto</button>
            </DivButton>
            )}
            <AdicionarFilme onClick={this.props.handleClickIn}>adicionar filme</AdicionarFilme>
          </Menu>
        </LogoMenu>
        <Img>
          <img src={capitao} alt={'capitão fantástico'}/>
        </Img>
      </DivInicio>
    )
  }
}