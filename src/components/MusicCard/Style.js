import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;

  p {
    width: 250px;
    font-family: 'Epilogue' sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: #001813;
    margin-left: 20px;
  }

  .favorite {
    margin-left: 20px;
    margin-right: 20px;
    color: red;

    :hover {
      cursor: pointer;
    }
  }

  .not-favorite {
    margin-left: 20px;
    margin-right: 20px;
    color: grey;

    :hover {
      cursor: pointer;
    }
  }
`