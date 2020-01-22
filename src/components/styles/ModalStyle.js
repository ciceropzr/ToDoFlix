import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const ImgPreviewUrl = styled.img`
  width: 300px;

  @media(max-width: 425px) {
    width: 200px;
  }
`

export const ModalForm = styled.div`
  background: #00000030;
  width: ${px2vw(1440)};
  height: 100%;
  position: fixed;
  top: 0;
  align-items: center;

    .background {
      background: white;
      width: ${px2vw(600)};
      margin-top: ${px2vw(90)};
      margin-right: auto;
      margin-bottom: 0;
      margin-left: auto;
      padding-top: ${px2vw(15)};
      padding-right: ${px2vw(20)};
      padding-bottom: ${px2vw(15)};
      padding-left: ${px2vw(20)};
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }

      @media (max-width: 1024px) {
        .background {
          margin-top: ${px2vw(130)}; 
        } 
      }

      @media (max-width: 768px) {
        .background {
          width: ${px2vw(620)}; 
        } 
      }

    .claquete {
      width: ${px2vw(230)};
      padding-right: ${px2vw(10)};
    }

      @media (max-width: 1024px){
        .claquete {
          width: ${px2vw(200)};
        } 
      }

      @media (max-width: 768px){
        .claquete {
          display: none;
        } 
      }
`

export const Form = styled.form`
  width: ${px2vw(313)};
  padding-left: ${px2vw(10)};
  display: flex;
  flex-wrap: wrap;
  font-family: Open Sans;
  font-weight: normal;

    @media (max-width: 1024px) {
      width: ${px2vw(360)};
    }

    @media (max-width: 768px) {
      width: ${px2vw(560)};
    }
  
    input {
      margin-bottom: ${px2vw(15)};
      width: ${px2vw(1440)};
      height: 10%;
      border: 0;
      background: #6b6b6b10;
      border-radius: 3px;
      cursor: pointer;
    }
      @media(max-width: 1024px) {
        input {
          margin-bottom: ${px2vw(20)};
        }
      }

      @media(max-width: 425px) {
        input {
          width: ${px2vw(550)};
        }
      }

    span {
      width: ${px2vw(1440)};
      margin-bottom: 3%;
    }

    .jaVisto {
      width: ${px2vw(20)};
      margin-left: ${px2vw(60)};
      height: ${px2vw(20)};
    }

    .queroVer {
      width: ${px2vw(20)};
      height: ${px2vw(20)};
    }

      @media(max-width: 768px) {
        .jaVisto, .queroVer {
          width: ${px2vw(35)};
          height: ${px2vw(35)};
        } 
      }

    div {
      display: flex;
      margin-bottom: ${px2vw(20)};
      width: ${px2vw(1440)};
    }

    h1 {
      font-size: 1.2rem;
      font-family: Open Sans;
      font-weight: 600;
    }
      @media(max-width: 768px){
        h1 {
          font-size: 1.4rem;
          margin-right: 29%;
        }   
      }

      @media(max-width: 425px){
        h1 {
          font-size: 1.4rem;
          margin-right: 10%;
        }   
      }

  .sair {
    font-size: 1.2rem;
    font-family: Open Sans;
    font-weight: 600;
    color: #00000030;
    margin-left: ${px2vw(80)};
    cursor: pointer;
  }

  .imagemExibicaoInput {
    width: ${px2vw(1440)};
    border: 0;
    background: #6b6b6b10;
    border-radius: 3px;
  }

  .imagemExibicaoTexto {
    width: ${px2vw(1440)};
    margin-bottom:2.5%;
  }

    @media(max-width: 425px) {
      .imagemExibicaoTexto {
        margin-top:2.5%;
      }
    }

  input[type='file'] {
    display: none;
  }

  label {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-radius: 3px;
    cursor: pointer;
    margin-bottom: 3%;
    width: ${px2vw(1440)};
    height: 10%;
    border: 0;
    background: #6b6b6b10;
  }

    @media (max-width: 1024px) {
      label {
        background: white;
      }
    }

  label p {
    border-radius: 0 3px 3px 0;
    display: flex;
    color: white;
    background: #75a9a4;
    font-family: Open Sans;
    font-weight: 600;
    width: ${px2vw(170)};
    height: 100%;
    font-size: 0.9rem;
    align-items: center;
    justify-content: center;
  }

    @media (max-width: 1024px) {
      label p {
        width: ${px2vw(310)};
        border-radius: 3px;
        margin-right: 5%;
      }
    }

    @media (max-width: 768px) {
      label p {
        width: ${px2vw(540)};
        margin-right: 0;
      }
    }
    @media (max-width: 425px) {
      label p {
        font-size: 1.4rem;
      }
    }
`

export const Div = styled.div`
  display: flex;
  width: ${px2vw(310)};
  flex-wrap: wrap;
  align-items: flex-start;
  margin-left: 43%;
  margin-top: 7%;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }

  .responsivo {
    width: ${px2vw(350)};
    display: flex;
    justify-content: space-around;
  }

    @media(max-width: 1024px) {
      .responsivo {
        width: 100%;
      }
    }

    @media(max-width: 425px) {
      .responsivo {
        width: 100%;
        flex-wrap: wrap-reverse;
      }
    }

  p {
    width: 100%;
  }

  button {
    padding: 3% 15%;
  }
    @media (max-width: 425px) {
      label p {
        padding: 2% 100%;
      }
    }

  button:nth-of-type(1) {
    border: 0;
    background: white;
    margin: 0 3% 0 2%;
    cursor: pointer;
  }

    @media (max-width: 1024px) {
      button:nth-of-type(1) {
        margin: 0 0 0 0;
      } 
    }

    @media (max-width: 425px) {  
      button:nth-of-type(1) {
          width: 100%;
      }  
    }

  button:nth-of-type(2) {
    border: 0;
    background: #75a9a4;
    border-radius: 3px;
    color: white;
    cursor: pointer;
  }

    @media (max-width: 425px) {
      button:nth-of-type(2) {
        width: 100%;
      } 
    }
`