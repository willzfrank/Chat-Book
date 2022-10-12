import styled from 'styled-components';

export const LandingPageContainer = styled.div``;
export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background: #f7fbfe;
  position: relative;
  transition: 0.3s ease-in-out;
  @media (max-width: 768px) {
    padding: 3rem 1rem 5rem 1rem;
    position: static;
    height: max-content;
  }

  .image1 {
    position: absolute;
    top: 100px;
    right: 330px;
    @media (max-width: 768px) {
      display: none;
      position: static;
    }
  }

  .image2 {
    position: absolute;
    top: 280px;
    right: 180px;
    width: 150px;
    height: 150px;
    @media (max-width: 768px) {
      display: none;
      position: static;
    }
  }

  .image4 {
    width: 40px;
    height: 40px;
    @media (max-width: 768px) {
      display: none;
      position: static;
    }
  }

  .image3 {
    position: absolute;
    top: 280px;
    left: 250px;
    width: 150px;
    height: 150px;
    @media (max-width: 768px) {
      display: none;
      position: static;
    }
  }

  .image5 {
    position: absolute;
    top: 100px;
    left: 230px;
    @media (max-width: 768px) {
      display: none;
      position: static;
    }
  }

  .header--content {
    width: 40%;
    @media (max-width: 425px) {
      width: 100%;
    }
  }
  h1 {
    font-size: 54px;
    text-align: center;
    line-height: 75px;
    letter-spacing: 1px;
    color: #2a1d6a;
    font-weight: 800;
    @media (max-width: 425px) {
      font-size: 40px;
      text-align: center;
      line-height: 50px;
      padding: 0 20px;
    }
  }

  .header--text {
    font-size: 20px;
    margin: 5px 0;
    color: var(--black);
    text-align: center;

    @media (max-width: 425px) {
      font-size: 16px;
      word-wrap: break-word;
      text-align: center;
      padding: 0 20px;
      letter-spacing: 1px;
    }
  }

  .button--container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 65px;
    margin: 20px 0;

    @media (max-width: 425px) {
      display: flex;
      margin: 1px 0;
      gap: 10px;
      flex-direction: column;
    }

    .started--btn {
      background: #2a1d6a;
      color: white;
      @media (max-width: 425px) {
        width: 100%;
      }
      &:active {
        transform: translateY(1px);
      }

      .link {
        color: var(--white);
        text-decoration: none;

        .right-arrow {
          display: block;
          color: white;
        }
      }
    }

    .download--btn {
      background: #e4effb;
      color: #2a1d6a;
      @media (max-width: 425px) {
        width: 100%;
        border: 2px solid var(--main);
      }
    }

    button {
      border: none;
      padding: 15px 40px;
      border-radius: 7px;
      box-shadow: 5px 5px 16px -3px rgba(111, 149, 255, 0.54);
      cursor: pointer;
      outline: none;
      font-size: 16px;

      @media (max-width: 768px) {
        padding: 14px;
        font-size: 15px;
      }
    }
  }
`;

export const ServiceContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--white);
  margin-bottom: 50px;
  padding-bottom: 50px;
  padding: 0 1rem;
  transition: 0.3s ease-in-out;
  @media (max-width: 768px) {
    padding: 5rem 0;
  }

  h2 {
    width: 45%;
    text-align: center;
    @media (max-width: 768px) {
      width: 100%;
      margin-top: 1rem;
    }
  }

  .service--box {
    border: none;
    width: 70vw;
    border-radius: 10px;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: (--black);

    @media (max-width: 768px) {
      width: 100%;
      padding: 0;
      justify-content: left;
      align-items: flex-start;
      margin:0 1rem;
    }

    h4 {
      color: (--main);
      font-size: 20px;
    }

    h2 {
      color: (--black);
      font-size: 25px;
    }
  }

  .service--content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 15px;
    }
  }

  .service--text {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding: 10px;
    gap: 6px;
    border: 2px solid var(--main);
    border-radius: 8px;
    box-shadow: 5px 5px 16px -3px #2a1d6a;

    @media (max-width: 768px) {
      text-align:left;
      align-items:flex-start;
      padding:30px;
    }
    

    .service--logo{
      border:1px solid var(--main)
      border-radius:4px;
      padding:0.4rem;
    }
  }
`;

export const PricingContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7fbfe;
  padding-bottom: 50px;
  margin-bottom: 50px;
  transition: 0.3s ease-in-out;
  @media (max-width: 768px) {
    width: 100%;
    padding: 5rem 0;
  }

  .pricing--box {
    border: none;
    width: 85vw;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media (max-width: 768px) {
      width: 100%;
      padding: 10px 0;
    }

    p {
      width: 50%;
      text-align: center;

      @media (max-width: 768px) {
        width: 100%;
        padding: 0 1rem;
      }
    }
  }

  .pricing--content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    margin-top: 55px;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    .pricing--content--box {
      border: none;
      height: 380px;
      box-shadow: 5px 5px 16px -3px #2a1d6a;
      padding: 30px;
      border-radius: 8px;
      position: relative;
      transition: 0.3s;
      @media (max-width: 768px) {
        height: 400px;
        padding: 40px 30px;
      }

      &:hover {
        transform: translateY(-10px);
        border: 0.3px solid #2a1d6a;
      }

      .pricing--content--recommend {
        position: relative;

        p {
          position: absolute;
          top: -25px;
          right: -30px;
          padding: 2px 4px;
          border: none;
          color: white;
          background: #2a1d6a;
        }
      }
      ul {
        list-style: none;
        margin: 20px 0;

        li {
          margin-bottom: 10px;
        }
      }

      button {
        position: absolute;
        bottom: -15px;
        border: none;
        border-radius: 5px;
        padding: 15px 25px;
        width: 80%;
        background: #2a1d6a;
        color: white;
        font-size: 18px;
        cursor: pointer;
      }

      .pricing--content--header {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 15px;
        text-align: center;

        .amount--container {
          display: flex;
          font-size: 25px;
          align-items: center;
          justify-content: center;

          .amount {
            color: #2a1d6a;
            font-size: 50px;
          }
        }
      }
    }
  }
`;

export const FAQContainer = styled.section`
  padding: 0 1rem;

  h1 {
    font-size: 30px;
    color: var(--main);
  }
`;

export const FaqBox = styled.div`
  padding: 2rem 0;
`;

export const StoreContainer = styled.div`
  background: var(--main);
  color: var(--white);
  margin: 5rem 1rem;
  padding: 2rem 0.5rem;
  border-radius: 5px;

  h2 {
    color: var(--white);
    width: 80%;
    font-size: 30px;
    padding: 0 1rem;
  }

  .store--subtitle {
    padding: 0 1rem;
  }

  .download--container {
    display: flex;
    justify-content: space-around;
    margin: 1rem 0;

    .store--box {
      display: flex;
      justify-content: space-around;
      align-items: center;
      gap: 1rem;
      padding: 2px 5px;
      border-radius: 5px;
      background: var(--white);
      color: var(--main);
      cursor: pointer;
    }
  }
`;

export const FooterContainer = styled.footer`
  display: flex;
  padding: 100px 30px;
  justify-content: space-around;
  flex-wrap: wrap;
  background: #f7fbfe;
  transition: 0.3s ease-in-out;
  @media (max-width: 768px) {
    padding: 50px 15px;
    margin: 0 auto;
    flex-direction: column;
    gap: 15px;
  }

  h3 {
    color: #2a1d6a;
    margin-bottom: 10px;
  }

  ul {
    list-style: none;

    li {
      margin-bottom: 15px;
      cursor: pointer;
    }
  }

  .go-to-top {
    position: fixed;
    bottom: 0;
    right: 15px;
    background-color: var(--main);
    color: var(--white);
    font-size: 2rem;
    padding: 10px;
    border-radius: 10px;
    box-shadow: -3px 3px 15px #2a1d6a;
    z-index: 31;
    visibility: hidden;
    opacity: 0;
    transition: 03s ease;
  }

  .active {
    visibility: visible;
    opacity: 1;
    transform: translateY(-15px);
  }
`;
