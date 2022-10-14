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
    font-size: 48.4px;
    text-align: center;
    line-height: 1.3;
    letter-spacing: -1.6px;
    color: #2a1d6a;
    font-weight: 800;
    font-family: 'Asul', sans-serif;
    @media (max-width: 425px) {
      font-size: 36px;
      text-align: center;
      line-height: 50px;
      padding: 0 20px;
    }
  }

  /* span {
    font-family: 'Asul', sans-serif;
  } */

  .header--text {
    font-size: 20px;
    margin: 5px 0;
    line-height: 1.7;
    letter-spacing: 0.4px;
    color: var(--black);
    text-align: center;
    font-family: Inter;

    @media (max-width: 425px) {
      margin: 2rem 0;
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
  padding: 0 1rem 50px  1rem;
  transition: 0.3s ease-in-out;
  @media (max-width: 768px) {
    padding: 50px 15px;
    margin-top:50px;
    
  }

  h2 {
    font-family: Inter;
    font-size:36px;
    text-align: center;
    letter-spacing:0.2px;
    line-height:1.5;
    margin:16px 0 18px;
    transition: all 1s ease 0s;
    @media (max-width: 768px) {
      width: 100%;
      margin-top: 1rem;
      font-size:29px;
    }
  }

  .service--box {
    border: none;
    /* width: 70vw;
    border:2px solid red; */
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
      font-size: 16px;
      letter-spacing:2px;
      text-transform:uppercase;
      font-family:inter;
      transition:all 1s ease 0s;
      

      @media (max-width: 768px) {
     font-size: 14px;
     
    }
    }

    /* h2 {
      color: (--black);
      font-size: 25px;
      border:2px solid red;
    } */
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
    padding: 50px 30px;
    margin:50px 0;
    /* gap: 6px; */
    border: 1px solid var(--main);
    border-radius: 16px;
    box-shadow: 5px 5px 16px -3px #2a1d6a;
    transition: all 1s ease 0s;
    width:100% ;

    @media (max-width: 768px) {
      text-align:left;
      align-items:flex-start;
      /* padding:30px; */
    }

    h3{
      font-size: 24px;
    font-family: 'Asul', sans-serif;
    font-weight: 600;
    letter-spacing: 0.2px;
    margin: 30px 0px 8px;
    }

    p{
      line-height: 1.8;
      transition: all 1s ease 0s;
      font-family: Inter;
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
  padding: 100px 20px 120px 20px;
  font-family: 'Inter';
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
      padding-top: 16px;
      font-size: 18px;
      line-height: 1.67;
      text-align: center;

      @media (max-width: 768px) {
        width: 100%;
        padding: 0 1rem;
      }
    }

    h2 {
      letter-spacing: 0.01em;
      font-size: 40px;
      font-weight: 700;
      line-height: 1.2;

      @media (max-width: 768px) {
        font-size: 32px;
        line-height: 1.5;
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
      height: max-content;
      box-shadow: 5px 5px 16px -3px #2a1d6a;
      padding: 45px 36px 63px;
      border-radius: 8px;
      position: relative;
      transition: 0.3s;
      max-width: 320px;
      @media (max-width: 768px) {
        height: calc(max-content + 20px);
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
          width: calc(max-content + 2px);
          top: -30px;
          right: -37px;
          padding: 1px 3px;
          border: none;
          color: white;
          background: #2a1d6a;
          font-size: 12px;
        }
      }
      ul {
        list-style: none;
        margin: 20px 0;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        justify-content: center;
        text-align: left;

        li {
          margin-bottom: 15px;
          font-size: 16px;
          font-family: inter;
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
          align-items: center;
          justify-content: center;
          font-size: 36px;
          font-weight: 600;
          width: 100%;
          padding: 1rem 0;
          border-bottom: 0.5px solid #2a1d6a;
          border-top: 0.5px solid #2a1d6a;

          .amount {
            color: #2a1d6a;
            /* font-size: 50px; */
          }
        }
      }
    }
  }
`;

export const FAQContainer = styled.section`
  padding: 100px 20px 120px 20px;
  position: relative;

  .abs-balls {
    position: absolute;
    top: 130px;
    right: 255px;
  }
  @media (max-width: 900px) {
    .abs-balls {
      top: 164px;
      right: 0px;
    }
  }

  h1 {
    max-width: 510px;
    margin-bottom: 80px;
    font-size: 30px;
    color: var(--main);
    font-family: 'Asul', sans-serif;
    transition: 1s ease;
    font-size: 48.4px;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    line-height: 1.3;
    letter-spacing: -1.6px;
    font-weight: bold;
    @media (max-width: 768px) {
      font-size: 36px;
    }
  }
`;

export const FaqBox = styled.div`
  padding: 40px 0;
  border-bottom: 0.5px solid #2a1d6a;
  transition: 1s ease;

  h2 {
    font-family: 'Asul', sans-serif;
    font-weight: bold;
    line-height: 1.7;
    letter-spacing: -0.4px;
    font-size: 150%;
    margin-bottom: 15px;
  }

  p {
    padding-right: 40px;
    transition: 1s ease;
    letter-spacing: -0.4px;
    font-size: 16px;
    font-family: 'Inter';
    line-height: 1.7;

    @media (max-width: 768px) {
      padding-right: 0px;
    }
  }
`;

export const StoreContainer = styled.div`
  background: var(--main);
  color: var(--white);
  margin: 140px 0;
  padding: 0 115px;
  border-radius: 4px;
  min-height: 380px;
  box-shadow: 0 50px 40px -30px #2a1d6a;

  @media (max-width: 768px) {
    max-width: 543px;
    padding: 0 20px;
  }

  .store--box--header {
    padding: 60px 80px;

    @media (max-width: 768px) {
      max-width: 395px;
      padding: 40px 20px;
    }
  }

  h2 {
    color: var(--white);
    /* width: 80%; */

    font-weight: bold;
    line-height: 1.3;
    letter-spacing: -1.6px;
    font-size: 48.4px;

    @media (max-width: 768px) {
      letter-spacing: 0;
      font-size: 250%;
      font-family: 'Asul', sans-serif;
      transition: 1s ease;
      font-size: 36px;
    }
  }

  .store--subtitle {
    font-size: 105%;
    margin: 24px 0 30px 0;
    letter-spacing: -0.4px;
    font-family: 'Inter';
    line-height: 1.7;

    @media (max-width: 768px) {
      max-width: 90%;
    }
  }

  .download--container {
    display: flex;
    justify-content: space-around;
    margin: 1rem 0;

    .store--box {
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-radius: 5px;
      background: var(--white);
      color: var(--main);
      cursor: pointer;
    }
  }
`;

export const FooterContainer = styled.footer`
  display: flex;
  padding: 20px 20px;
  justify-content: space-around;
  align-items: center;
  background: #f7fbfe;
  border-radius: 8px;
  transition: 0.3s ease-in-out;
  @media (max-width: 768px) {
    padding: 50px 15px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  h3 {
    color: #2a1d6a;
    font-size: 30px;
    font-family: Monsieur La Doulaise;
  }

  p {
    cursor: pointer;
    font-size: 18px;
    font-family: inter;

    cursor: pointer;
    @media (max-width: 768px) {
      margin: 18px 0;
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
