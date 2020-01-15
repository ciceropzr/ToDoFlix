import React from 'react';
import styled from 'styled-components';

export default class PaginaInicial extends React.Component {
  // constructor(props) {
  // super(props)

  // }

  render() {
    return(
      <Styl>
        <h1>ToDoFlix</h1>
        <p>categorias</p>
        <button>adicionar filme</button>
        <img alt="fantastico"/>
      </Styl>
    )
  }
}

const Styl = styled.div `
  width: 500px;
  background: black;
`