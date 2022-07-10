import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 208px;
    height: 158px;
    margin-top: 120px;
  }

  button {
    height: 60px;
    width: 200px;
    background: #003BE5;
    border-radius: 2px;
    padding: 8px, 32px, 8px, 32px;
    box-shadow: 0px 4px 4px 0px #00000040;
    margin-top: 20px;
    border: none;
    color: white;
    font-family: 'Verdana' sans-serif;
    font-size: 18px;

    :hover {
      cursor: pointer;
    }
  }
`

export const Div = styled.div`
  display: flex;
  width: 60%;
  margin-top: 80px;
  margin-bottom: 80px;

  h1 {
    font-family: 'Epilogue';
    font-style: normal;
    font-weight: 400;
    font-size: 180px;
    line-height: 205px;
    letter-spacing: 0.02em;
    color: #023031;
    margin-right: 50px;
  }

  p {
    font-family: 'Epilogue';
    font-style: normal;
    font-weight: 300;
    font-size: 54px;
    line-height: 65px;
    letter-spacing: 0.02em;
    color: #023031;
  }
`
