import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root {
       --background-primary: #fdfdff;
       --background-secondary: #f8f8fd;
       --color-theme: #003F66;
       --call-to-action: #F35D56;
       --hightlight-shadow: #d6d6ef;
       --font-color: #00171f;
       --calendar-default: #9bcbeb;
       --calendar-first: #f15bb5;
       --calendar-second: #9b5be5;
       --calendar-third: #fedd0b;
       --calendar-fourth: #85e0ff;
       --calendar-fifth: #00e0c2;
       --primary-font: "Red Hat Display", sans-serif;
    }

    body { 
        font-size: 16px;
        -webkit-font-smoothing: antialiased !important;
        height: 100vh;
        font-family: var(--primary-font);
    }

    h1,h2,h3,h4,h5,h6 {
       
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
        border: none;
    }
`;

export default GlobalStyle;
