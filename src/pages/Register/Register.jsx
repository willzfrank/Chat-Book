import '../Login/Login';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import LeftArrow from '../../component/LeftArrow/LeftArrow';

const Register = () => {
  const [userInput, setUserInput] = useState({
    username: '',
    email: '',
    password: '',
    confirmpass: '',
  });
  const [confirmPass, setConfirmPass] = useState(false);

  const handleChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.confirmpass !== userInput.password) {
      setConfirmPass(true);
      setUserInput({
        ...userInput,
        password: '',
        confirmpass: '',
      });
    }
    setConfirmPass(false);
    setUserInput({
      username: '',
      email: '',
      password: '',
      confirmpass: '',
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
          <form className="form--container" onSubmit={handleSubmit}>
            <div className="form--box">
              <h2>Sign Up</h2>
              <input
                type="text"
                placeholder="Username"
                className="login--input"
                name="username"
                value={userInput.username}
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Email"
                className="login--input"
                name="email"
                value={userInput.email}
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Password"
                className="login--input"
                name="password"
                value={userInput.password}
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="login--input"
                name="confirmpass"
                value={userInput.confirmpass}
                onChange={handleChange}
              />
              {confirmPass && (
                <p className="passwordincorrect"> Password doesnt match</p>
              )}

              <Link to={'/login'} className="login--link">
                <p>Already have an account? Login.</p>
              </Link>
              <input
                type="submit"
                value="Sign up for free"
                className="login--button"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
