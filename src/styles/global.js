import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    #root {
        height: 100vh;
    }
    
    :root {
       --primary-background: #ffffff,
       --secondary-background: #003F66,
       --orange-background: #F35D56,
       --gray-background: #d6d6ef
    }

    body { 
        font-size: 16px;
        -webkit-font-smoothing: antialiased !important;
        height: 100vh;
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
