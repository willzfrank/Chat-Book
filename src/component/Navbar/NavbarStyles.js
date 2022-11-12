import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  padding: 0rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fafafa;
  /* border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px; */
  transition: 0.3s ease-in-out;
  position: fixed;
  z-index: 40;
  width: 100%;
  /* border-bottom: 2px solid var(--main); */
  /* border-radius: 8px; */
  top: 0;
  

  /* edit to 990 for future use */

  @media only screen and (max-width: 1024px) {
    margin: 0;
    padding: 0 20px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }

  .logo {
    font-size: 40px;
    color: var(--main);
    transition: 0.3s;
    font-style: italic;
  }
  .hamburger {
    font-size: 1.25rem;

    @media only screen and (max-width: 990px) {
      font-size: 1.25rem;
    }
  }

  @media only screen and (max-width: 1140px) {
    padding: 20px 40px;
  }

  @media only screen and (max-width: 1140px) {
    padding: 5px;
  }

  img {
    height: 90px;
    width: 52px;

    @media only screen and (max-width: 990px) {
      height: 50px;
      width: 29px;
    }
  }

  .nav-btn {
    font-size: 30px;
    color: var(--main);
  }
`;

export const NavbarListContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 75%;
  

  @media only screen and (max-width: 990px) {
    display: none;
  }

  .navbar--list {
    display: flex;
    list-style: none;
    gap: 45px !important;
    width:20%;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    li {
      font-weight: bold;
      line-height: 1.7;
      letter-spacing: -0.4px;
      text-align: center;
      z-index: 30;
      margin: 20px 0;
      font-size: 100%;
      font-weight: 500;
      font-family: inter;
      transition: 0.2s ease;

      .sign--btn {
        color: var(--main);
        border: 2px solid var(--main);
        padding: 6px 10px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        line-height: 24px;
        text-decoration: none;
      }
      .link {
        font-size: 16px;
        line-height: 24px;
        cursor: pointer;
        color: var(--black);
        text-decoration: none;
        letter-spacing: 0;

        &.link:hover {
          letter-spacing: 0.5px;
        }
        &.link:active {
          letter-spacing: 0.5px;
        }

        &.link:after {
          backface-visibility: hidden;
          border: 1px solid rgba(#fff, 0);
          bottom: 0px;
          content: ' ';
          display: block;
          margin: 0 auto;
          position: relative;
          transition: all 280ms ease-in-out;
          width: 0;
        }
        &link:before {
          backface-visibility: hidden;
          border: 1px solid rgba(#fff, 0);
          bottom: 0px;
          content: ' ';
          display: block;
          margin: 0 auto;
          position: relative;
          transition: all 280ms ease-in-out;
          width: 0;
        }

        &.link:hover:after {
          backface-visibility: hidden;
          border-color: #fff;
          transition: width 350ms ease-in-out;
          width: 70%;
        }
        &.link:hover:before {
          backface-visibility: hidden;
          border-color: #fff;
          transition: width 350ms ease-in-out;
          width: 70%;
          bottom: auto;
          top: 0;
        }
      }
    }
  }
`;

export const NavbarMobile = styled.div`
  .close--container {
    position: absolute;
    top: 0;
    right: 5%;
  }

  .nav--mobile--list {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 100px;

    .login--box {
      margin-top: 10px;
    }
    .navbar--list {
      font-size: 25px;
      list-style: none;
      display: flex;
      gap: 17px;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      li {
        margin: 10px 0;

        .logo--mobile {
          font-size: 40px;
          color: var(--main);
          font-weight: bolder !important;
        }
        .link {
          font-size: 25px;
          text-decoration: none;
          color: var(--black);
        }
      }
    }
  }
`;
