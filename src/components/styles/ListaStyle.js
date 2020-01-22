import styled from "styled-components";

export const Container = styled.div`
  padding: 2% 5%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

    @media(max-width: 425px){
      justify-content: center;
    }

  h1 {
    width: 100%;
    font-family: Open Sans;
    color: #364859;
  }

    .bloco {
      width: 300px;
    }

  h2 {
    font-size: 16px;
    font-family: Open Sans;
    color: #364859;
    font-weight: normal;
  }

    @media(max-width: 768px) {
      h2 {
        width: 100%;
        font-size: 18px;
      } 
    }

    @media(max-width: 425px) {
      h2 {
        width: 100%;
        font-size: 22px;
      } 
    }

  .texto{
    color: #94A2AC;
    width: 100%;
    font-size: 1rem;
    font-weight: normal;
    font-family: Open Sans;
  }

    @media(max-width: 768px) {
      .texto{
        font-size: 18px;
        width: 100%;
      }
    }
    
    @media(max-width: 425px) {
      .texto{
        font-size: 20px;
        width: 100%;

      }
    }
`