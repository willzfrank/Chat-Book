import styled from 'styled-components';

export const ErrorContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    gap: 20px;
  }

  img {
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .error--box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;

    @media (max-width: 768px) {
      padding: 1rem;
      word-wrap: break-word;
      text-align: center;
    }

    button {
      padding: 15px 20px;

      .link {
        text-decoration: none;
        color: var(--white);

        &:hover {
          color: var(--main);
        }
      }
    }
  }
`;
