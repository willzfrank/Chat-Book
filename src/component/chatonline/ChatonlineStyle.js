import styled from 'styled-components';

export const ChatOnlineContainer = styled.div`
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  width: 90%;
  border-radius: 10px;
  height: 94vh;
  @media (max-width: 375px) {
    box-shadow: none;
    overflow-x: scroll;
    width: 100%;
    height: max-content;
  }
  h2 {
    padding: 0.8rem;
  }
  input {
    border: none;
    outline: none;
    border-bottom: 1px solid var(--main);
    padding: 0.5rem;
    margin-left: 10px;
    width: 90%;
  }
`;

export const ChatOnlineContent = styled.div`
  margin: 10px 0;
  @media (max-width: 375px) {
    border: 2px solid red;
    padding: 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: scroll;
    width: 100%;
    height: 100px;
  }

  .chat--content {
    margin: 5px 0;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    margin: 0.3rem 0.5rem;
    border-radius: 5px;
    transition: 0.3;
    font-size: 0.8rem;

    &:hover {
      background: var(--black);
      padding: 1rem;
      cursor: pointer;
      transition: 0.3;
      color: var(--white);
    }
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    p {
      font-weight: bold;
      font-size: 0.8rem;
      @media (max-width: 375px) {
        display: none;
      }
    }
    span {
      @media (max-width: 375px) {
        display: none;
      }
    }
  }
`;
