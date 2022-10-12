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
            Hideas offers anyone willing to get aquainted and communicate with
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
        <div>ANIMATION</div>
        <div>
          <FaqBox>
            <h2>How much does it cost?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            </p>
          </FaqBox>
          <hr />
          <FaqBox>
            <h2>Is it available in my region?</h2>
            <p>
              {' '}
              mollitia impedit non dolor, corrupti veritatis omnis, modi hic
              iure
            </p>
          </FaqBox>
          <hr />
          <FaqBox>
            <h2>Will i get my money back?</h2>
            <p>
              {' '}
              ipsa nihil! Laborum incidunt assumenda rerum! Quia magnam atque
            </p>
          </FaqBox>
          <hr />
          <FaqBox>
            <h2>How much does it cost?</h2>
            <p> voluptatum nobis.</p>
          </FaqBox>
          <hr />
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
        <h2>Get the Hideas Mobile App</h2>
        <p className="store--subtitle">
          Placing this text here to occupy space so it would not be placed as
          blank.
        </p>
        <div className="download--container">
          <div className="store--box">
            image
            <div>
              <p>Download on the </p>
              <p>
                <b>App Store</b>
              </p>
            </div>
          </div>
          <div className="store--box">
            image
            <div>
              <p>Get it on </p>
              <p>
                <b>Play Store</b>
              </p>
            </div>
          </div>
        </div>
      </StoreContainer>
      <FooterContainer>
        <div>
          <h3>HIIDEAS</h3>
          <ul>
            <li>Features</li>
            <li>Download</li>
            <li>Business</li>
            <li>Privacy</li>
          </ul>
        </div>

        <div>
          <h3>COMPANY</h3>
          <ul>
            <li>About</li>
            <li>Get in touch</li>
            <li>Blog</li>
          </ul>
        </div>

        <div>
          <h3>DOWNLOAD</h3>
          <ul>
            <li>Mac/PC</li>
            <li>Android</li>
            <li>iPhone</li>
          </ul>
        </div>
        <a href="#top" className="animate-bounce go-to-top active">
          <RocketLaunchIcon />
        </a>
      </FooterContainer>
    </LandingPageContainer>
  );
};

export default LandingPage;
