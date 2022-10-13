import React from 'react';
import {
  HeaderContainer,
  LandingPageContainer,
  ServiceContainer,
  PricingContainer,
  FAQContainer,
  FaqBox,
  StoreContainer,
  FooterContainer,
} from './LandingPageStyles.js';
import image1 from '../../assets/heart.png';
import image2 from '../../assets/like.png';
import appStore from '../../assets/appstore.svg';
import playStore from '../../assets/playstore.svg';
import image3 from '../../assets/istockphoto-480613419-612x612.jpg';
import image4 from '../../assets/gift.png';
import image5 from '../../assets/36600502-thank-you-speech-bubble-drawing.jpg';
import { Link } from 'react-router-dom';
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Navbar from '../../component/Navbar/Navbar.jsx';

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <Navbar />
      <HeaderContainer>
        <img src={image1} alt="" className="image1" />
        <img src={image5} alt="" className="image2" />
        <img src={image3} alt="" className="image3" />
        <img src={image4} alt="" className="image4" />
        <img src={image2} alt="" className="image5" />
        <div className="header--content" id="top">
          <h1>
            Stay Cool !
            <span
              style={{
                color: 'var(--black)',
                fontFamily: 'Monsieur La Douloise',
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
                  style={{ display: 'none' }}
                  className="right-arrow"
                />
              </Link>
            </button>
            <button className="download--btn">Download </button>
          </div>
        </div>
      </HeaderContainer>
      <ServiceContainer>
        <div className="service--box">
          <h4>
            Why Use <span style={{ color: 'var(--main)' }}>Hideas?</span>
          </h4>
          <h2> A delightful experience for you and your social life</h2>
          <div className="service--content">
            <div className="service--text">
              <div className="service--logo">logo</div>
              <h3>Customer support</h3>
              <p>
                Hiideas offer premium customer support for every user 24/7 and
                free resources needed and please note that this is just a fake
                site business for training purposes and just typing to fill up
                this space here.
              </p>
            </div>

            <div className="service--text">
              <div className="service--logo">logo</div>
              <h3>Powerful Tools</h3>
              <p>
                Hiideas offer premium powerful tools for every user 24/7 and
                free resources needed and please note that this is just a fake
                site business for training purposes and just typing to fill up
                this space here.
              </p>
            </div>

            <div className="service--text">
              <div className="service--logo">logo</div>
              <h3>Enterprise-ready</h3>
              <p>
                Hiideas offer premium Enterprise-ready feature for every user
                24/7 and free resources needed and please note that this is just
                a fake site business for training purposes and just typing to
                fill up this space here.
              </p>
            </div>
          </div>
        </div>
      </ServiceContainer>
      <PricingContainer>
        <div className="pricing--box">
          <h2>Our pricing</h2>
          <p>
            Our pricing varies from free, premium to business. Remember not to
            fill in your bank details in this cause its actually a demo account.
          </p>
          <div className="pricing--content">
            <div className="pricing--content--box">
              <div className="pricing--content--header">
                <h4>Free</h4>
                <span className="amount--container">
                  $<span className="amount">0</span>
                </span>
              </div>

              <ul>
                <li>Ads present</li>
                <li>No Secured messaging</li>
                <li>Messages saved for over 2 years</li>
                <li>No access to Hideas products</li>
                <li>slow access</li>
              </ul>
              <button>Choose plan</button>
            </div>

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
                <li>No ads</li>
                <li>Secured messaging</li>
                <li>Messages saved for over 10 years</li>
                <li>access to Hideas products</li>
                <li>Quick access</li>
              </ul>
              <button>Choose plan</button>
            </div>

            <div className="pricing--content--box">
              <div className="pricing--content--header">
                <h4>Business</h4>
                <span className="amount--container">
                  $<span className="amount">350</span>
                </span>
              </div>
              <ul>
                <li>No ads</li>
                <li>Secured end-to-end messaging</li>
                <li>Messages saved for over 30 years</li>
                <li>access to Hideas products</li>
                <li>Better access</li>
              </ul>
              <button>Choose plan</button>
            </div>
          </div>
        </div>
      </PricingContainer>
      <FAQContainer>
        <h1>Frequently Asked Questions</h1>
        <div className="faq--circle">
          {' '}
          <svg
            class="abs-balls balls"
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
          <FaqBox>
            <h2>How much does it cost?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            </p>
          </FaqBox>
          <FaqBox>
            <h2>Is it available in my region?</h2>
            <p>
              {' '}
              mollitia impedit non dolor, corrupti veritatis omnis, modi hic
              iure
            </p>
          </FaqBox>
          <FaqBox>
            <h2>Will i get my money back?</h2>
            <p>
              {' '}
              ipsa nihil! Laborum incidunt assumenda rerum! Quia magnam atque
            </p>
          </FaqBox>
          <FaqBox>
            <h2>How much does it cost?</h2>
            <p> voluptatum nobis.</p>
          </FaqBox>
          <FaqBox>
            <h2>How much does it cost?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              mollitia impedit non dolor, corrupti veritatis omnis, modi hic
              iure ipsa nihil! Laborum incidunt assumenda rerum! Quia magnam
              atque voluptatum nobis.
            </p>
          </FaqBox>
        </div>
      </FAQContainer>
      <StoreContainer>
        <div className="store--box--header">
          <h2>Get the Hideas Mobile App</h2>
          <p className="store--subtitle tb-slid-up slide-up">
            Placing this text here to occupy space so it would not be placed as
            blank.
          </p>
        </div>

        <div className="download--container">
          <div className="store--box">
            <img src={appStore} alt="" />
          </div>
          <div className="store--box">
            <img src={playStore} alt="" />
          </div>
        </div>
      </StoreContainer>
      <FooterContainer>
        <h3>HIIDEAS</h3>

        <p>About</p>
        <p>Get in touch</p>
        <p>Business</p>
        <p>Features</p>
        <p>Privacy</p>

        <a href="#top" className="animate-bounce go-to-top active">
          <RocketLaunchIcon />
        </a>
      </FooterContainer>
    </LandingPageContainer>
  );
};

export default LandingPage;
