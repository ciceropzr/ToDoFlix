import React from 'react';
export default class Lista extends React.Component {
  // constructor(props){
  //   super(props);
  // }

  // 5% de padding na primeira div para ficar padrão de espaço
  render() {
    return(
      <div>
        <div>
        <h1>Minha lista:</h1>
          <img></img>
          <h1></h1>
          <p>{this.props.nome}</p>
        </div>
      </div>
    )
  }  
}