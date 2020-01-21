import React from 'react';
import styled from 'styled-components';

export default class Lista extends React.Component {

  render() {

    return (
      <Container>
        <h1>Minha lista:</h1>
        {this.props.form.map((dados) => {
          return (
            <div key={dados}>
              <div>
                {this.props.imagePreviewUrl}
              </div>
              <h2>{dados.nome}</h2>
              <p>{dados.descricao}</p>
            </div>
          )
        })}
      </Container>
    )
  }
}

const Container = styled.div`
  padding: 2% 5%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media(max-width: 425px){
    justify-content: center;
  }
  @media(max-width: 375px){
    padding-right: 16%;
  }

  h1 {
    width: 100%;
    font-family: Open Sans;
    color: #364859;
  }

  @media(max-width: 768px) {
    div {
      width: 633px;
    }
  }

  h2 {
    width: 300px;
    font-size: 16px;
    font-family: Open Sans;
    color: #364859;
    font-weight: normal;
  }
  @media(max-width: 768px) {
    h2 {
      width: 100%;
      font-size: 18px;
      font-family: Open Sans;
      color: #364859;
    } 
  }
  @media(max-width: 425px) {
    h2 {
      width: 100%;
      font-size: 22px;
      font-family: Open Sans;
      color: #364859;
    } 
  }

  p{
    color: #94A2AC;
    width: 300px;
    font-size: 14px;
    font-weight: normal;
    font-family: Open Sans;
  }
  @media(max-width: 768px) {
    p{
    width: 440px;
    font-size: 18px;
    }
  }
  @media(max-width: 425px) {
    p{
    font-size: 20px;
    }
  }
`