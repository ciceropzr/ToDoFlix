import React from 'react';
  // 5% de padding na primeira div para ficar padrão de espaço

export default class Lista extends React.Component {

  render() {
    return (
    <>
      <h1>Minha lista:</h1>
      {this.props.form.map((dados) => {
      return (
        <div>
          <img src={dados.imagem} alt={""}></img>
          <h1>{dados.nome}</h1>
          <p>{dados.descricao}</p>
        </div>
      )
      })}
    </>
    )
  }
}