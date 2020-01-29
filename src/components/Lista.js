import React from 'react';
import {Container} from './styles/ListaStyle';

export default class Lista extends React.Component {

  render() {

    return (
      <Container>
        <h1>Minha lista:</h1>
        {this.props.filmes.map((filme) => {
          return (
            <div className="bloco" key={filme}>
              <div>{filme.imagePreviewUrl}</div>
              <h2>{filme.nome}</h2>
              <span className="texto">
                {filme.descricao}
              </span>
            </div>
          )
        })}
      </Container>
    )
  }
}