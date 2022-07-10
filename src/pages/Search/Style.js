import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  padding: 100px 0;
  
  input {
    padding: 12px 16px;
    gap: 10px;
    width: 519px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #3D495C;
    border-radius: 6px;
    margin-right: 20px;
  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px 32px;
    gap: 10px;
    border: none;
    color: #FFFFFF;
    width: 134px;
    height: 45px;
    background: #003BE5;
    border-radius: 4px;

    font-family: 'Verdana' sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
  }
`

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 40px;
`

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 0px 16px;
  gap: 16px;
  width: 290px;
  height: 320px;
  background: #FFFFFF;
  border: 1px solid #E1E5EB;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  margin-top: 50px;
  margin-right: 20px;

  :hover {
    cursor: pointer;
  }

  img {
    /* position: absolute; */
    width: 288px;
    height: 180px;
    border-radius: 6px 6px 0px 0px;
  }

  h3 {
    font-family: 'Verdana' sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
    color: #3D495C;
    padding-left: 15px;
  }

  p {
    font-family: 'Verdana' sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #3D495C;
    padding-left: 15px;
  }
`

export const P = styled.p`
  height: 33px;
  font-family: 'Epilogue', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 25px;
  color: #001813;
  margin-left: 5%;
  text-align: center;
`

export const P2 = styled.p`
  font-family: 'Epilogue';
  font-style: normal;
  font-weight: 300;
  font-size: 42px;
  line-height: 65px;
  letter-spacing: 0.02em;
  color: #023031;
  text-align: center;
  margin-top: 5%;
`
