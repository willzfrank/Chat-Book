import React from 'react';
import errorImg from '../../assets/95483df50a0a3324c4cf9ccb1094b825.webp';
import { ErrorContainer } from './404Styles';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <ErrorContainer>
      <img src={errorImg} alt="404" />
      <div className="error--box">
        <h1>Do not worry we understand, we do get lost too sometimes.</h1>
        <h4>This page you requested could not be found.</h4>
        <h4>But we can guide you home !</h4>
        <button className="button">
          <Link to="/" className="link">
            GO HOME
          </Link>
        </button>
      </div>
    </ErrorContainer>
  );
};

export default Error404;
