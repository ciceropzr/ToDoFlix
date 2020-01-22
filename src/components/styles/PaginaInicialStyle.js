import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const DivInicio = styled.div`
  width: ${px2vw(1440)};
  h1 {
    width: 0;
    font-family: Open Sans;
    font-weight: 900;
    color: #C74350;
    flex-grow: 1;
  }
`
export const LogoMenu = styled.div`
  display: flex;
  padding-top: ${px2vw(60)};
  padding-right: ${px2vw(50)};
  padding-left: ${px2vw(50)};
  padding-bottom: ${px2vw(40)};
  align-items: center;
  justify-content: space-around;
  position: relative;
`
export const Menu = styled.div`
  width: ${px2vw(350)};
  display: flex;
  justify-content: space-around;
  align-items: center;

    @media(max-width: 768px) {
      width: ${px2vw(430)};
    }

  p {
      font-family: Open Sans;
      font-weight: normal;
      cursor: pointer;
      z-index: 1;
  }

  @media(max-width: 425px) {
    p {
      display: none;
    }
  }
`
export const AdicionarFilme = styled.div`
    font-family: Open Sans;
    font-weight: normal;
    background: white;
    color: black;
    padding-right: ${px2vw(20)};
    padding-left: ${px2vw(20)};
    padding-top: ${px2vw(10)};
    padding-bottom: ${px2vw(10)};
    border-radius: 4px;
    border: 0;
    cursor: pointer;

  :hover {
    background: #C74350;
    color: white;
  }

  @media(max-width: 425px) {
    background: #C74350;
    color: white;
    border-radius: 2px;
  }
`

export const Img = styled.div`
  img {
    width: ${px2vw(1440)};
  }
`

export const DivButton = styled.span`
  width: ${px2vw(130)};
  position: absolute;
  right: ${px2vw(260)};
  top: ${px2vw(110)};
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  box-shadow: 0 0 2px 0px black;

    @media(max-width: 1024px) {      
      top: ${px2vw(115)};
      width: ${px2vw(160)};
      right: ${px2vw(255)};
    }

    @media(max-width: 768px) {
      top: ${px2vw(120)};
      width: ${px2vw(180)};
      right: ${px2vw(300)};
    }

  .menuDrop {
    color: black;
    background: white;
    border-radius: 0;
    padding-top: ${px2vw(10)};
    padding-bottom: ${px2vw(10)};
    padding-left: ${px2vw(20)};
    padding-right: ${px2vw(20)};
    width: ${px2vw(1440)};
    border: 0;
  }

    @media(max-width: 768px) {
      .menuDrop:hover {
        font-size: 1.3rem;
      }
    }

  .menuDrop:hover {
    background: #ECECEC;
    font-weight: 600;
  }
`