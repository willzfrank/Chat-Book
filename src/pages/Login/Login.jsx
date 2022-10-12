import './Login.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LeftArrow from '../../component/LeftArrow/LeftArrow';

const Login = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUserData({
      email: '',
      password: '',
    });
  };
  return (
    <div>
      <LeftArrow />
      <div className="login--container">
        <div className="login--box">
          <div className="login--container--content">
            <h1 className="login--container--title">Hideas</h1>
            <h6 className="login--container--text">
              Explore the ideas throughout the world.
            </h6>
          </div>
          <div className="form--container">
            <form className="form--box" onSubmit={handleSubmit}>
              <h2>Log In</h2>
              <input
                type="email"
                placeholder="Email"
                className="login--input"
                name="email"
                onChange={handleChange}
                value={userData.email}
              />
              <input
                type="password"
                placeholder="Password"
                className="login--input"
                name="password"
                onChange={handleChange}
                value={userData.password}
              />
              <input type="button" value="Log In" className="login--button" />
              {/* <Link to="#" className="login--forgot">
              Forgot Password ?
            </Link> */}
              <Link to={'/register'} className="login--link">
                <p>Dont have an account? Register.</p>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
