import styled from 'styled-components';

export const Div = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  width: 260px;
  height: 80px;
  background-color: #036B52;
  text-align: center;
  border-radius: 10px;
  margin-top: 5px;
  margin-left: 40%;

  p {
    font-family: 'Verdana' sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    color: #FFF;
    padding-left: 10px;
    padding-right: 10px;
  }

  animation: fadeOut ease 4s;
  -webkit-animation: fadeOut ease 4s;
  -moz-animation: fadeOut ease 4s;
  -o-animation: fadeOut ease 4s;
  -ms-animation: fadeOut ease 4s;

  @keyframes fadeOut {
    0% {
      opacity:1;
    }
    50% {
      opacity:1;
    }
    100% {
      opacity:0;
    }
  }

  @-moz-keyframes fadeOut {
    0% {
      opacity:1;
    }
    50% {
      opacity:1;
    }
    100% {
      opacity:0;
    }
  }

  @-webkit-keyframes fadeOut {
    0% {
      opacity:1;
    }
    50% {
      opacity:1;
    }
    100% {
      opacity:0;
    }
  }

  @-o-keyframes fadeOut {
    0% {
      opacity:1;
    }
    50% {
      opacity:1;
    }
    100% {
      opacity:0;
    }
  }

  @-ms-keyframes fadeOut {
    0% {
      opacity:1;
    }
      50% {
      opacity:1;
    }
    100% {
      opacity:0;
    }
  }
`