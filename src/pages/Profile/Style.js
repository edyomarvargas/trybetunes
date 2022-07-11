import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
  margin-left: 40%;
  position: absolute;
`
export const Div1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 400px;

  img {
    width: 80px;
    margin-right: 50px;
    border-radius: 40px;
  }

  button {
    width: 120px;
    height: 36px;
    border: 1px solid #003BE5;
    border-radius: 5px;
    background-color: transparent;
    
    font-family: 'Verdana' sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 132%;
    letter-spacing: 0.03em;
    color: #003BE5;

    :hover {
      cursor: pointer;
    }
  }
`

export const Div2 = styled.div`
  width: 400px;
  margin-top: 1%;

  h3 {
    font-family: 'Verdana' sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 150%;
    color: #3D495C;
    margin-top: 20px;
  }

  p {
    font-family: 'Verdana' sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #3D495C;
  }
`