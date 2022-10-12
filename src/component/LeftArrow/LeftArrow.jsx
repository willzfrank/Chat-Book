import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ArrowBackContainer } from './LeftArrowStyles';
import { Link } from 'react-router-dom';

const LeftArrow = () => {
  return (
    <ArrowBackContainer>
      <Link to="/" className="link">
        <ArrowBackIcon className="arrow--icon" />
      </Link>
    </ArrowBackContainer>
  );
};

export default LeftArrow;
