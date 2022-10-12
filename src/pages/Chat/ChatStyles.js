import styled from 'styled-components';

export const ChatLeftContainer = styled.section`
  flex: 1;
  @media (max-width: 320px) {
    /* border: 2px solid red; */
    /* flex: 1; */
  }
`;
export const ChatCenterContainer = styled.section`
  flex: 3;
  border-radius: 10px;
  height: 95vh;
  -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
  box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);

  @media (max-width: 375px) {
    width: 100%;
    flex: 2;
    height: 70vh;
    border: 2px solid red;
  }
  .chatcontent {
    height: 65vh;
    padding: 0 1rem;
    overflow-x: scroll;
    @media (max-width: 375px) {
      height: 40vh;
    }

    .chatcontent--body {
      .chatbody--box {
        border: 2px solid red;
        padding: 0.5rem;
        height: 100px;
        margin-bottom: 1rem;
        width: 200px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        @media (max-width: 375px) {
          border: 2px solid green;
          height: 50px;
        }
        span {
          text-align: right;
        }
      }
      img {
        width: 32px;
        height: 32px;
      }
    }
  }

  .profile--box {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    flex-direction: column;

    .profile--box--content {
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      gap: 5px;

      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-left: 5px;
      }
      span {
        font-weight: bold;
        font-size: 0.8rem;
      }
    }
  }

  .profile--line {
    width: 85%;
    margin: 1rem 0 0.2rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.1px solid var(--main);
  }

  .text--box {
    padding: 1rem;
    overflow-x: scroll;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .button {
      padding: 12px 15px;
    }

    textarea {
      border: 2px solid red;
      width: 80%;
      padding: 1rem;
      border-bottom-left-radius: 25px;
      border-bottom-right-radius: 25px;
      border-top-left-radius: 25px;
      border-top-right-radius: 25px;
      outline: none;
      border: 1px solid var(--black);
    }
  }
`;
export const ChatRightContainer = styled.section`
  flex: 1;
`;
export const ChatContainer = styled.section`
  @media (max-width: 375px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  display: flex;
  height: 100vh;
  border: 2px solid blue;
  span {
    @media (max-width: 320px) {
      width: 100% !important;
    }
  }
`;
