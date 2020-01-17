import React from 'react';
import styled from 'styled-components';
import claquete from './imagens/claquete.svg';
import estrelaCinza from './imagens/estrela-cinza.svg';
import estrelaAmarela from './imagens/estrela.svg';
// import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader';

export default class Modal extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      oneStar: '',
      dropFile: false,
    }
  }

  addImage = (ev) => {
    this.setState({
      dropFile: true
    })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
  }

  render() {
    return(
      <ModalForm>
        <div className="background">
          <img className="claquete" src={claquete} alt={"claquete"}/>
          <Form onSubmit={this.handleSubmit}>
            <div>
              <h1>Adicionar novo filme:</h1>
              <p className="sair" onClick={this.props.handleClickOut}>X</p>
            </div>
            Nome:
            <input type="text"/>
            Descrição:
            <input type="text"/>
            Status:
            <input type="text"/>
            <p className="imagemExibicaoTexto">Imagem de exibição:</p>
            <input className="imagemExibicaoInput" type="text"/>
            <button onClick={() => this.state.addImage}>adicionar imagem</button>
            {this.state.addImage && <MyUploader/>}
          </Form>
          <Div>
            <p>Nota:</p>
            <img onClick={this.state.changeStar} src={estrelaCinza} alt={"uma estrela"}/>
            <img src={estrelaCinza} alt={"duas estrelas"}/>
            <img src={estrelaCinza} alt={"três estrelas"}/>
            <img src={estrelaCinza} alt={"quatro estrelas"}/>
            <img src={estrelaCinza} alt={"cinco estrelas"}/>
            <button onClick={this.props.handleClickOut}>cancelar</button>
            <button>feito</button>
          </Div>
        </div>
      </ModalForm>
    )
  }
}

const MyUploader = () => {
  const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }
  const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }
  const handleSubmit = (files, allFiles) => {
    console.log(files.map(f => f.meta))
    allFiles.forEach(f => f.remove())
  }

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      accept="image/*,audio/*,video/*"
    />
  )
}

const ModalForm = styled.div`
  background: #00000030;
  width: 100vw;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  /* justify-content: center; */

    .background {
      background: white;
      width: 600px;
      height: 435px;
      margin: 0 auto;
      padding: 0.5% 2%;
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
  /* flex-direction: column; */
  flex-wrap: wrap;
  font-size: Open Sans;
  font-weight: normal;
  
    input {
      margin-bottom: 3%;
      width: 100%;
      height: 10%;
      border: 0;
      background: #6b6b6b10;
      border-radius: 3px;
    }

    div {
      display: flex;
      /* flex-direction: column; */
      margin-bottom: 10%;
      width: 100%;
    }

    h1 {
      font-size: 22px;
      font-family: Open Sans;
      font-weight: 600;
    }

  .sair {
    font-size: 22px;
    font-family: Open Sans;
    font-weight: 600;
    color: #00000030;
    margin-left: 32%;
    /* align-self: flex-end; */
  }

  .imagemExibicaoInput {
    /* margin-bottom: 3%; */
    height: 10%;
    width: 49%;
    border: 0;
    background: #6b6b6b10;
    border-radius: 3px;
  }

  button {
    font-family: Open Sans;
    font-weight: 600;
    font-size: 12px;
    width: 49%;
    height: 10%;
    border: 0;
    color: white;
    background: #75a9a4;
    border-radius: 3px;
    margin-left: 2%;
  }

  .imagemExibicaoTexto {
    width: 100%;
  }
`;

const Div = styled.div`
  display: flex;
  width: 70%;
  height: 25%;
  /* flex-direction: column; */
  flex-wrap: wrap;
  align-items: flex-start;
  margin-left: 35%;
  margin-top: 2%;
  /* padding-left: 37%; */

  p {
    width: 100%;
  }

  img {
    width: 30px;
    margin-bottom: 15%;
  }

  img:nth-of-type(5) {
    margin-right: 55%;
  }

  button {
    /* width: 50%; */
    /* height: 10%; */
    padding: 3% 15%;
    /* margin-top: 5%; */
  }

  button:nth-of-type(1) {
    border: 0;
    background: white;
    margin: 0 2% 0 15%;
  }

  button:nth-of-type(2) {
    border: 0;
    background: #75a9a4;
    border-radius: 3px;
    color: white;
  }
`