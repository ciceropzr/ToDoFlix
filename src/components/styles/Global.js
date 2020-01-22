import { createGlobalStyle } from "styled-components";
import px2vw from "../../utils/px2vw";

export const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Open Sans;
    font-weight: normal;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiazed;
  }

  :root {
    background: white;
    font-size: ${px2vw(24)};

      @media (min-width: 425px) {
        font-size: ${px2vw(20)};
      }

      @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }
    }
`;

export default Global;