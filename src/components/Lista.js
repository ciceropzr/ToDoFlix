import React from 'react';
import {Container} from './styles/ListaStyle';

export default class Lista extends React.Component {

  render() {

    return (
      <Container>
        <h1>Minha lista:</h1>
        {this.props.form.map((dados) => {
          return (
            <div className="bloco" key={dados}>
              <div>{this.props.imagePreviewUrl}</div>
              <h2>{dados.nome}</h2>
              <span className="texto">
                {dados.descricao}
              </span>
            </div>
          )
        })}
      </Container>
    )
  }
}