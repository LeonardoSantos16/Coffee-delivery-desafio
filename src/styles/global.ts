import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

    :root{
        font-size: 10px;
    }
    body{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 100vh;
        place-items: center;
    }
 
    h3{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 2rem;
        line-height: 130%;
        color: ${(props) => props.theme['base-subtitle']};
    }
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 130%;
        color: ${(props) => props.theme['base-text']};
    }

`