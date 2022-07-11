import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;

  div {
    display: flex;
    align-items: flex-end;
    margin-bottom: 30px;
  }

  div img {
    width: 80px;
    height: 80px;
    margin-right: 20px;
    border-radius: 40px;
  }

  div input {
    width: 288px;
    height: 37px;
    background: #FAFBFC;
    border: 1px solid #3D495C;
    border-radius: 3px;
    text-indent: 10px;
  }

  form h3 {
    font-family: 'Verdana' sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
    color: #3D495C;
  }

  form p {
    font-family: 'Verdana' sans-serif;
    font-style: italic;
    font-weight: 400;
    font-size: 15px;
    line-height: 150%;
    color: #3D495C;
    margin: 2px 0;
  }

  form textarea {
    resize: none;
    background: #FAFBFC;
    border: 1px solid #3D495C;
    border-radius: 3px;
    line-height: 30px;
    text-indent: 10px;
    font-size: 16px;
  }

  form input {
    width: 390px;
    height: 37px;
    background: #FAFBFC;
    border: 1px solid #3D495C;
    border-radius: 3px;
    text-indent: 10px;
    margin-bottom: 20px;
    font-size: 16px;
  }

  form button {
    padding: 8px 32px;
    gap: 10px;
    width: 115px;
    height: 40px;
    background: #003BE5;
    border-radius: 2px;
    border: none;
    color: #FFFFFF;
    font-family: 'Verdana' sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    display: flex;
    align-items: center;
    margin-top: 20px;

    :hover {
      cursor: pointer;
    }

    :disabled {
      background-color: grey;
      cursor: not-allowed;
    }
  }

  .email-check {
    color: red;
    margin-top: -15px;
  }
`
