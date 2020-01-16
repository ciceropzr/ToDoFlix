import React from 'react';
import styled from 'styled-components';
import claquete from './imagens/claquete.svg';
import estrelaCinza from './imagens/estrela-cinza.svg';
// import estrelaAmarela from './imagens/estrela.svg';

export default class Modal extends React.Component {

  // handleStar = () => {

  // }

  render() {
    return(
      <ModalForm>
        <div className="background">
          <img className="claquete" src={claquete} alt={"claquete"}/>
          <Form>
            <div>
              <h1>Adicionar novo filme:</h1>
              <p>X</p>
            </div>
            Nome:
            <input type="text"/>
            Descrição:
            <input type="text"/>
            Status:
            <input type="text"/>
            Imagem de exibição:
            <input type="text"/>
            <button>adicionar imagem</button>
          </Form>
          <div>
            <p>Nota:</p>
            <img src={estrelaCinza} alt={"uma estrela"}/>
            <img src={estrelaCinza} alt={"duas estrelas"}/>
            <img src={estrelaCinza} alt={"três estrelas"}/>
            <img src={estrelaCinza} alt={"quatro estrelas"}/>
            <img src={estrelaCinza} alt={"cinco estrelas"}/>
          </div>
          <div>
            <button>cancelar</button>
            <button>feito</button>
          </div>
        </div>
      </ModalForm>
    )
  }
}

const ModalForm = styled.div`
  background: #000000;
  width: 100vw;
  height: 100%;
  position: absolute;
  top: 0;

  .background {
    background: white;
    width: 600px;
    height: 400px;
    margin: 0 auto;
    padding: 2%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

  }
  .claquete {
    width: 30%;
    padding-right: 2%;
  }
`;

const Form = styled.form`
  width: 70%;
  padding-left: 5%;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 18px;
    font-family: Open Sans;
    font-weight: 600;
  }

  p {
    font-size: 18px;
    font-family: Open Sans;
    font-weight: 600;
    color: #00000030;
    align-self: flex-end;
  }

  input {
    margin-bottom: 3%;
  }
`;