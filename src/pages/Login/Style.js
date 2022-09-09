import styled from 'styled-components';

export const DivS = styled.div`
  width: 100vw;
  height: 100vh;
  background: #FAFAFA;
  display: flex;
  flex-direction: column;

  img {
    width: 300px;
    align-self: center;
    margin-top: 1.5rem;
  }

  div {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 697px;
    height: 314px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    left: 50%;
    top: 55%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  input {
    height: 35px;
    width: 400px;
    border: 1px solid #E1E5EB;
    border-radius: 0px;
    padding: 12px 16px;
    gap: 10px;
    margin-bottom: 2px;
  }

  button {
    height: 35px;
    width: 400px;
    background: #003BE5;
    border-radius: 2px;
    box-shadow: 0px 4px 4px 0px #00000040;
    margin-top: 20px;
    border: none;
    
    font-family: 'Verdana' sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: white;

    :hover {
      cursor: pointer;
    }

    :disabled {
      background-color: grey;
      cursor: not-allowed;
    }
  }

  @media (max-width: 750px) {
    img {
      margin-top: 1.5rem;
    }

    div {
      width: 480px;
      height: 280px;
    }
  }

  @media (max-width: 500px) {
    img {
      margin-top: 1.5rem;
    }

    div {
      width: 320px;
      height: 240px;
      margin-top: 2rem;
    }

    input {
      height: 30px;
      width: 300px;
    }

    button {
      height: 30px;
      width: 300px;
    }
  }
`
