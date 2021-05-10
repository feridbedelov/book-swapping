import React from "react";
import "../styles/auth.scss";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { registerSchema } from "../schemas/auth";
import { useAuthContext } from "../contexts/Auth.context";
import { useAsync } from "../hooks/useAsync";
import { Spinner } from "../components/Spinner/Spinner";

export const Register = ({ history }) => {
  const { register } = useAuthContext();
  const { run, isLoading, error } = useAsync();

  const showErrorMessage = () => {
    return error?.errors?.map((err) => {
      return (
        <div className="mb-0 form-field">
          <div className="alert alert-danger" role="alert">
            {err}
          </div>
        </div>
      );
    });
  };

  const onSubmit = async (values) => {
    await run(register(values));
    history.push("/");
  };

  return (
    <div className="auth-page-container">
      <div className="left">
        <div className="about-app">How does it work?</div>
      </div>

      <div className="right">
        <div className="header">
          <div className="logo">AURORA</div>
          <p className="mission">
            “Share your knowledge. It is a way to achieve immortality.”
          </p>
        </div>
        <Formik
          initialValues={{ email: "", password: "", fullName: "", phone: "" }}
          onSubmit={(values) => onSubmit(values)}
          validationSchema={registerSchema}
        >
          {() => (
            <Form className="form">
              <p className="form-heading">Sign up to your account</p>
              {showErrorMessage()}
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
              <div className="form-field">
                <Field
                  className="text-input"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                />
                <ErrorMessage
                  component="div"
                  className="error-msg"
                  name="fullName"
                />
              </div>
              <div className="form-field">
                <Field
                  className="text-input"
                  name="phone"
                  type="text"
                  placeholder="Enter your phone number"
                />
                <ErrorMessage
                  component="div"
                  className="error-msg"
                  name="phone"
                />
              </div>
              <button className="submit-btn" type="submit">
                {isLoading ? <Spinner /> : "Sign Up"}
              </button>
            </Form>
          )}
        </Formik>
        <div className="actions">
          Already have an account? {"  "}
          <button onClick={() => history.push("login")}> Sign In </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
