import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { authSchema } from "../../schemas/auth";

const Auth = ({ authType, onSubmit }) => {
  const authenticationType = authType === "login" ? "Sign In " : "Sign Up ";

  const switchLink = () => {
    switch (authType) {
      case "login":
        return (
          <div className="actions">
            Don't have an account? <Link to="/register"> Sign up</Link>
          </div>
        );

      case "register":
        return (
          <div className="actions">
            Already have an account? <Link to="/login">Sign in</Link>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="auth-page-container">
      <div className="left">
        <div className="about-app">How it works?</div>
      </div>

      <div className="right">
        <div className="header">
          <div className="logo">AURORA</div>
          <p className="mission">
            “Share your knowledge. It is a way to achieve immortality.”
          </p>
        </div>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => onSubmit(values)}
          validationSchema={authSchema}
        >
          {() => (
            <Form className="form">
              <p className="form-heading">
                {authenticationType} to your account
              </p>
              <div className="form-field">
                <Field
                  className="text-input"
                  name="email"
                  placeholder="Enter your email"
                />
                <ErrorMessage
                  component="div"
                  className="error-msg"
                  name="email"
                />
              </div>
              <div className="form-field">
                <Field
                  className="text-input"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  component="div"
                  className="error-msg"
                  name="password"
                />
              </div>
              <button className="submit-btn" type="submit">
                {authenticationType}
              </button>
            </Form>
          )}
        </Formik>
        {switchLink()}
      </div>
    </div>
  );
};

export default Auth;
