import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #2980B9;
    --background: #FFFFFF;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  // font-size: 16px (Desktop)
  html {
    @media (max-width: 1080px){
      font-size:93.75%; // 15px
    }
    @media (max-width: 720px){
      font-size:87.5%; // 14px
    }
  }
  // REM - 1rem = 16px
  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
  button {
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
  .loading{
    display: flex;
    margin: 0 auto;
  }

  @keyframes rotation {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  }



  .btn {
    cursor: pointer;
    border: 2px solid #2980b9;
    background: white;
    height: 2.5rem;
    border-radius: 1rem;
    width: 50%;
    min-width: 300px;
    color: #2980b9;
    font-weight: bold;
    -webkit-transition: background-color 0.2s;
    transition: background-color 0.2s;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
    
    :hover {
      color: white;
      background: #2980b9;
      cursor: pointer;
    }
  }


  .fade-in {
    opacity: 1;
    animation-name: fade-in;
    animation-duration: .5s;
    animation-timing-function: linear;
}

.fade-up {
    opacity: 1;
    animation-name: fade-up;
    animation-duration: .5s;
    animation-timing-function: linear;
}

.fade-down {
    opacity: 1;
    animation-name: fade-down;
    animation-duration: .5s;
    animation-timing-function: linear;
}

.fade-left {
    opacity: 1;
    animation-name: fade-left;
    animation-duration: .5s;
    animation-timing-function: linear;
}

.fade-right {
    opacity: 1;
    animation-name: fade-right;
    animation-duration: .5s;
    animation-timing-function: linear;
}

.fade-expand {
    opacity: 1;
    transform: scale(1);
    animation-name: fade-expand;
    animation-duration: .5s;
    animation-timing-function: linear;
}

.fade-shrink {
    opacity: 1;
    transform: scale(1);
    animation-name: fade-shrink;
    animation-duration: .5s;
    animation-timing-function: linear;
}

.expand {
    transform: scale(1);
    animation-name: expand;
    animation-duration: .5s;
    animation-timing-function: linear;
}

.shrink {
    transform: scale(1);
    animation-name: shrink;
    animation-duration: .5s;
    animation-timing-function: linear;
}

@keyframes fade-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}


@keyframes fade-up {
    0% {
        opacity: 0;
        transform: translateY(10px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fade-down {
    0% {
        opacity: 0;
        transform: translateY(-10px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fade-left {
    0% {
        opacity: 0;
        transform: translateX(10px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fade-right {
    0% {
        opacity: 0;
        transform: translateX(-10px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes expand {
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
}

@keyframes fade-expand {
    0% {
        opacity: 0;
        transform: scale(0);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes shrink {
    0% {
        transform: scale(2);
    }
    100% {
        transform: scale(1);
    }
}

@keyframes fade-shrink {
    0% {
        opacity: 0;
        transform: scale(2);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}
`;

