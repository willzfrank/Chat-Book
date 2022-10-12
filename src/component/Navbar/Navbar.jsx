import {
  NavbarContainer,
  NavbarListContainer,
  NavbarMobile,
} from './NavbarStyles';

import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useRef, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const navRef = useRef();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const showNavbar = function () {
    setMenuIsOpen(true);
  };

  const hideNavBar = function () {
    setMenuIsOpen(false);
  };

  return (
    <>
      <NavbarContainer>
        <div>
          <span className="logo">Hideas</span>
        </div>
        <NavbarListContainer ref={navRef}>
          <ul className="navbar--list">
            <li>
              <Link to="#services" className="link">
                Services
              </Link>
            </li>
            <li>
              <Link to="#pricing" className="link">
                Plans
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link">
                Contact
              </Link>
            </li>
          </ul>
          <ul className="navbar--list sign--btn--box">
            <li>
              <Link to="/login" className="link">
                Log in
              </Link>
            </li>
            <li>
              <Link to="/register" className=" sign--btn">
                Sign Up
              </Link>
            </li>
          </ul>
        </NavbarListContainer>
        <MenuIcon className="nav-btn hamburger" onClick={showNavbar} />
      </NavbarContainer>
      {menuIsOpen && (
        <NavbarMobile className="menu">
          <div className="close--container">
            <CloseIcon className="nav--close--btn" onClick={hideNavBar} />
          </div>

          {/* this closes the menu */}

          {/* fit menu items in here */}
          <div className="nav--mobile--list">
            <ul className="navbar--list">
              <li>
                <span className="logo--mobile">Hideas</span>
              </li>
              <li>
                <Link to="#services" className="link" onClick={hideNavBar}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="#pricing" className="link" onClick={hideNavBar}>
                  Plans
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link" onClick={hideNavBar}>
                  Contact
                </Link>
              </li>
            </ul>
            <ul className="navbar--list login--box">
              <li>
                <Link to="/login" className="link" onClick={hideNavBar}>
                  Log in
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="link sign--btn"
                  onClick={hideNavBar}
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </NavbarMobile>
      )}
    </>
  );
};

export default Navbar;
