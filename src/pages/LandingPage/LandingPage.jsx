import React from "react";
import {
  HeaderContainer,
  LandingPageContainer,
  ServiceContainer,
  PricingContainer,
  FAQContainer,
  FaqBox,
  StoreContainer,
  FooterContainer,
} from "./LandingPageStyles.js";
import image1 from "../../assets/heart.png";
import image2 from "../../assets/like.png";
import appStore from "../../assets/appstore.svg";
import playStore from "../../assets/playstore.svg";
import image3 from "../../assets/istockphoto-480613419-612x612.jpg";
import image4 from "../../assets/gift.png";
import image5 from "../../assets/36600502-thank-you-speech-bubble-drawing.jpg";
import { Link } from "react-router-dom";
import ChevronRightSharpIcon from "@mui/icons-material/ChevronRightSharp";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import HandymanIcon from "@mui/icons-material/Handyman";
import DoneIcon from "@mui/icons-material/Done";
import BusinessIcon from "@mui/icons-material/Business";
import Navbar from "../../component/Navbar/Navbar.jsx";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <Navbar />
      <HeaderContainer>
        <img
          src={image1}
          alt=""
          className="image1 animate__animated animate__pulse animate__infinite"
        />
        <img
          src={image5}
          alt=""
          className="image2 animate__animated animate__pulse animate__infinite"
        />
        <img
          src={image3}
          alt=""
          className="image3 animate__animated animate__pulse animate__infinite"
        />
        <img
          src={image4}
          alt=""
          className="image4 animate__animated animate__pulse animate__infinite"
        />
        <img
          src={image2}
          alt=""
          className="image5 animate__animated animate__pulse animate__infinite"
        />
        <div className="header--content" id="top">
          <h1>
            Stay Cool !
            <span
              style={{
                color: "var(--black)",
                fontFamily: "Monsieur La Douloise",
              }}
            >
              <br /> with
            </span>
            <span>
              <br /> Social Chat
            </span>
          </h1>
          <p className="header--text">
            Hideas offers anyone willing to get acquainted and communicate with
            family and friends easily. Start with Hideas, our fully-loaded
            social-chat which you can install for free and use without limits.
          </p>
          <div className="button--container">
            <button className="started--btn">
              <Link to="/register" className="link">
                Get Started
                <ChevronRightSharpIcon
                  style={{ display: "none" }}
                  className="right-arrow"
                />
              </Link>
            </button>
            <button className="download--btn">Download </button>
          </div>
        </div>
        <div class="custom-shape-divider-bottom-1667386572">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </HeaderContainer>
      <ServiceContainer>
        <div className="service--box" id="service">
          <Fade bottom>
            <h4>
              Why Use <span style={{ color: "var(--main)" }}>Hideas?</span>
            </h4>
          </Fade>
          <Fade bottom>
            <h2> A delightful experience for you and your social life</h2>
          </Fade>

          <div className="service--content">
            <Pulse>
              <div className="service--text">
                <Fade bottom>
                  <div className="service--logo">
                    <SupportAgentIcon className="icon" />
                  </div>
                </Fade>
                <Fade bottom>
                  <h3>Customer support</h3>
                </Fade>
                <Fade bottom>
                  <p>
                    Hideas offer premium customer support for every user 24/7
                    and free resources needed and please note that this is just
                    a fake site business for training purposes and just typing
                    to fill up this space here.
                  </p>
                </Fade>
              </div>
            </Pulse>

            <Pulse>
              <div className="service--text">
                <Fade bottom>
                  <div className="service--logo">
                    <HandymanIcon className="icon" />
                  </div>
                </Fade>
                <Fade bottom>
                  <h3>Powerful Tools</h3>
                </Fade>
                <Fade bottom>
                  <p>
                    Hideas offer premium powerful tools for every user 24/7 and
                    free resources needed and please note that this is just a
                    fake site business for training purposes and just typing to
                    fill up this space here.
                  </p>
                </Fade>
              </div>
            </Pulse>

            <Pulse>
              <div className="service--text">
                <Fade bottom>
                  <div className="service--logo">
                    <BusinessIcon className="icon" />
                  </div>
                </Fade>
                <Fade bottom>
                  <h3>Enterprise-ready</h3>
                </Fade>
                <Fade bottom>
                  <p>
                    Hideas offer premium Enterprise-ready feature for every user
                    24/7 and free resources needed and please note that this is
                    just a fake site business for training purposes and just
                    typing to fill up this space here.
                  </p>
                </Fade>
              </div>
            </Pulse>
          </div>
        </div>
      </ServiceContainer>
      <PricingContainer>
        <div className="pricing--box">
          <Fade bottom>
            <h2>Our pricing</h2>
          </Fade>
          <Fade bottom>
            <p>
              Our pricing varies from free, premium to business. Remember not to
              fill in your bank details in this cause its actually a demo
              account.
            </p>
          </Fade>

          <div className="pricing--content">
            <Fade bottom>
              <div className="pricing--content--box">
                <div className="pricing--content--header">
                  <h4>Free</h4>
                  <span className="amount--container">
                    $<span className="amount">0</span>
                  </span>
                </div>

                <ul>
                  <Fade bottom>
                    <li>
                      <DoneIcon />
                      Ads present
                    </li>
                  </Fade>
                  <Fade bottom>
                    <li>
                      <DoneIcon />
                      No Secured messaging
                    </li>
                  </Fade>

                  <Fade bottom>
                    <li>
                      <DoneIcon />
                      Messages saved for over 5 years
                    </li>
                  </Fade>
                  <Fade bottom>
                    <li>
                      <DoneIcon />
                      No Access to Hideas products
                    </li>
                  </Fade>
                  <Fade bottom>
                    <li>
                      <DoneIcon />
                      Slow access
                    </li>
                  </Fade>
                </ul>
                <button>Choose plan</button>
              </div>
            </Fade>

            <Fade bottom>
              <div className="pricing--content--box">
                <div className="pricing--content--recommend">
                  <p>Recommended</p>
                </div>
                <div className="pricing--content--header">
                  <h4>Premium</h4>
                  <span className="amount--container">
                    $<span className="amount">125</span>
                  </span>
                </div>
                <ul>
                  <Fade bottom>
                    <li>
                      <DoneIcon />
                      No ads
                    </li>
                  </Fade>
                  <Fade bottom>
                    <li>
                      <DoneIcon />
                      Secured messaging
                    </li>
                  </Fade>

                  <Fade bottom>
                    <li>
                      <DoneIcon />
                      Messages saved for over 10 years
                    </li>
                  </Fade>
                  <Fade bottom>
                    <li>
                      <DoneIcon />
                      Access to Hideas products
                    </li>
                  </Fade>
                  <Fade bottom>
                    <li>
                      <DoneIcon />
                      Quick access
                    </li>
                  </Fade>
                </ul>
                <button>Choose plan</button>
              </div>
            </Fade>

            <Fade bottom>
              <div className="pricing--content--box">
                <div className="pricing--content--header">
                  <h4>Business</h4>
                  <span className="amount--container">
                    $<span className="amount">350</span>
                  </span>
                </div>
                <ul>
                  <Fade bottom>
                    <li>
                      <DoneIcon />
                      No ads
                    </li>
                  </Fade>
                  <Fade bottom>
                    <li>
                      <DoneIcon />
                      Secured end-to-end messaging
                    </li>
                  </Fade>
                  <Fade bottom>
                    <li>
                      <DoneIcon />
                      Messages saved for over 30 years
                    </li>
                  </Fade>
                  <Fade bottom>
                    <li>
                      <DoneIcon />
                      Access to Hideas products
                    </li>
                  </Fade>
                  <Fade bottom>
                    <li>
                      <DoneIcon />
                      Better access
                    </li>
                  </Fade>
                </ul>
                <button>Choose plan</button>
              </div>
            </Fade>
          </div>
        </div>
      </PricingContainer>
      <FAQContainer>
        <Fade bottom>
          <h1>Frequently Asked Questions</h1>
        </Fade>

        <div className="faq--circle">
          {" "}
          <svg
            className="abs-balls balls animate__animated animate__pulse animate__infinite"
            width="107"
            height="146"
            viewBox="0 0 107 146"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g class="ball">
              <circle cx="72" cy="111" r="35" fill="#2a1d6a"></circle>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M55.1021 141.658C64.9327 138.292 72.0001 128.971 72.0001 118C72.0001 104.193 60.8072 93 47.0001 93C45.1597 93 43.3657 93.1989 41.6385 93.5763C41.4144 93.9659 41.1976 94.3603 40.9883 94.7592C42.9096 94.2636 44.9241 94 47.0001 94C60.2549 94 71.0001 104.745 71.0001 118C71.0001 128.844 63.8083 138.008 53.9342 140.983C54.3187 141.215 54.7081 141.44 55.1021 141.658Z"
                fill="white"
              ></path>
            </g>
            <circle class="ball" cx="17" cy="55" r="17" fill="#2a1d6a"></circle>
            <circle class="ball" cx="41" cy="7" r="7" fill="#2a1d6a"></circle>
            <circle class="ball" cx="41" cy="7" r="7" fill="#2a1d6a"></circle>
          </svg>
        </div>

        <div className="faq--box">
          <Fade bottom>
            <FaqBox>
              <Fade bottom>
                <h2>How much does it cost?</h2>
              </Fade>
              <Fade bottom>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur
                </p>
              </Fade>
            </FaqBox>
          </Fade>
          <Fade bottom>
            <FaqBox>
              <Fade bottom>
                <h2>Is it available in my region?</h2>
              </Fade>
              <Fade bottom>
                <p>
                  {" "}
                  mollitia impedit non dolor, corrupti veritatis omnis, modi hic
                  iure
                </p>
              </Fade>
            </FaqBox>
          </Fade>
          <Fade bottom>
            <FaqBox>
              <Fade bottom>
                <h2>Will i get my money back?</h2>
              </Fade>
              <Fade bottom>
                <p>
                  {" "}
                  ipsa nihil! Laborum incidunt assumenda rerum! Quia magnam
                  atque
                </p>
              </Fade>
            </FaqBox>
          </Fade>
          <Fade bottom>
            <FaqBox>
              <Fade bottom>
                <h2>How much does it cost?</h2>
              </Fade>
              <Fade bottom>
                <p> voluptatum nobis.</p>
              </Fade>
            </FaqBox>
          </Fade>
          <Fade bottom>
            <FaqBox>
              <Fade bottom>
                <h2>How much does it cost?</h2>
              </Fade>
              <Fade bottom>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur mollitia impedit non dolor, corrupti veritatis omnis,
                  modi hic iure ipsa nihil! Laborum incidunt assumenda rerum!
                  Quia magnam atque voluptatum nobis.
                </p>
              </Fade>
            </FaqBox>
          </Fade>
        </div>
      </FAQContainer>
      <StoreContainer>
        <div className="store--box--header">
          <Fade bottom>
            <h2>Get the Hideas Mobile App</h2>
          </Fade>
          <Fade bottom>
            <p className="store--subtitle tb-slid-up slide-up">
              Placing this text here to occupy space so it would not be placed
              as blank.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ab
              repudiandae, veritatis nulla explicabo,
              <br />
              adipisci reiciendis quaerat eum, at modi cumque praesentium vero
              dicta nihil rerum assumenda ea ducimus omnis!
            </p>
          </Fade>
        </div>

        <div className="download--container">
          <Fade bottom>
            <div className="store--box">
              <img src={appStore} alt="" />
            </div>
          </Fade>
          <Fade bottom>
            <div className="store--box">
              <img src={playStore} alt="" />
            </div>
          </Fade>
        </div>
      </StoreContainer>
      <FooterContainer>
        <h3>HIDEAS</h3>

        <p>About</p>
        <p>Get in touch</p>
        <p>Business</p>
        <p>Features</p>
        <p>Privacy</p>

        <a
          href="#top"
          className="animate__animated animate__bounce animate__infinite go-to-top active"
        >
          <RocketLaunchIcon />
        </a>
      </FooterContainer>
    </LandingPageContainer>
  );
};

export default LandingPage;
