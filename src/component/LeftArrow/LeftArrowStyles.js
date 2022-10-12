import styled from 'styled-components';

export const ArrowBackContainer = styled.div`
  @media only screen and (max-width: 768px) {
    margin: 1rem;
  }

  @media only screen and (max-width: 320px) {
    margin: 0rem 0 1rem 0.2rem;
  }
  .link {
    text-decoration: none;
    color: var(--white);

    @media only screen and (max-width: 768px) {
      font-size: 10px;
    }
  }
  position: absolute;
  left: 10%;
  top: 10%;
  background: var(--main);
  color: var(--white);
  border-radius: 50%;
  padding: 10px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    left: 0%;
    top: 0%;
    padding: 5px;
  }

  //   .arrow--icon {
  //     border: 2px solid red !important;
  //   }
`;
