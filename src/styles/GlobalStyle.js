import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle` 
  
  * { font-family: 'Ubuntu', sans-serif; }

  body {
    margin: 0;
    padding: 0;
  }

  .message {
    height: auto;
    padding: 10px;
    display: flex;
    flex-direction: row;
  }

  .message-container {
    width: 100%;
    height: 80vh;
    overflow-y: scroll;

    @media screen and (max-width: 800px) {
      height: 100vh;  
    }
  }

  .message-container::-webkit-scrollbar {
    display: none;
  }

  .hide {
    opacity: 0 !important;
  }

`;

export default GlobalStyle;