import '../Login/Login';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import LeftArrow from '../../component/LeftArrow/LeftArrow';
import { useFormik } from 'formik';
import { basicSchema } from "../../schemas";
import Bounce from 'react-reveal/Bounce';

const Register = () => {
  

  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };


  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,}= useFormik({
    initialValues:{
      username: '',
      email: '',
      password: '',
      confirmpassword: '',
    },
    validationSchema:basicSchema,
    onSubmit,
  });

  console.log(errors);
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
          <form autoComplete="off" onSubmit={handleSubmit} className="form--container" >
            <div className="form--box">
              <h2>Sign Up</h2>
              <input
                type="text"
                placeholder="Username"
                className={errors.username && touched.username ? "passwordincorrect" : ""}
                style={{borderRadius:" 8px",
                  border: "none",
                  background:" rgb(236, 235, 235)",
                  fontSize: "18px",
                  padding: "20px",
                  margin: "5px 0",
                  outline: "none",
                  width: "100%"}}
                name="username"
                id='username'
                value={values.username}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <Bounce bottom cascade>
              {errors.username && touched.username && <p className="error">{errors.username}</p>}
              </Bounce>
              
              <input
                type="email"
                placeholder="Email"
                className={errors.email && touched.email ? "passwordincorrect" : ""}
                style={{borderRadius:" 8px",
                  border: "none",
                  background:" rgb(236, 235, 235)",
                  fontSize: "18px",
                  padding: "20px",
                  margin: "5px 0",
                  outline: "none",
                  width: "100%"}}
                name="email"
                id='email'
                onBlur={handleBlur}
                value={values.email}
                onChange={handleChange}
              />
               <Bounce bottom cascade>
               {errors.email && touched.email && <p className="error">{errors.email}</p>}
               </Bounce>
              
              <input
                type="password"
                placeholder="Password"
                className={errors.password && touched.password ? "passwordincorrect" : ""}
                style={{borderRadius:" 8px",
                  border: "none",
                  background:" rgb(236, 235, 235)",
                  fontSize: "18px",
                  padding: "20px",
                  margin: "5px 0",
                  outline: "none",
                  width: "100%"}}
                name="password"
                id='password'
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <Bounce bottom cascade>
              {errors.password && touched.password && <p className="error">{errors.password}</p>}
              </Bounce>
              
              <input
                type="password"
                placeholder="Confirm Password"
                className={errors.confirmpassword && touched.confirmpassword ? "passwordincorrect" : ""}
                style={{borderRadius:" 8px",
                  border: "none",
                  background:" rgb(236, 235, 235)",
                  fontSize: "18px",
                  padding: "20px",
                  margin: "5px 0",
                  outline: "none",
                  width: "100%"}}
                name="confirmpassword"
                id='confirmpassword'
                value={values.confirmpassword}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <Bounce bottom cascade>
              {errors.confirmpassword && touched.confirmpassword && <p className="error">{errors.confirmpassword}</p>}
              </Bounce>
              
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
