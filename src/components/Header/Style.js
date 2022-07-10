import styled from 'styled-components';

export const SectionS1 = styled.section`
  width: 100vw;
  height: 96px;
  background: #023031;
  box-shadow: 0px 4px 1px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;

  #logo {
    width: 117px;
    height: 96px;
    margin-top: -35px;
    margin-left: 50px;
  }

  #user-photo {
    width: 30px;
  }

  div {
    display: flex;
    align-items: center;
    width: 198.7px;
    height: 41.65px;
    margin-right: 50px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
  }

  div p {
    margin: 5%;
    font-family: 'Epilogue' sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;
  }

  div img {
    margin-left: 5px;
  }
`
export const SectionS2 = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100vw;

  div {
    width: 33.2%;
    height: 78px;
    background: #F0F2F5;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
      cursor: pointer;
    }
  }
  
  p {
    text-decoration: none;
    font-size: 28px;
    font-weight: 700;
    color: #2FC18C;
  }

  .selected {
    background: #036B52;
    color: #FFFFFF;
  }

  .selected p {
    color: #FFFFFF;
  }
`
