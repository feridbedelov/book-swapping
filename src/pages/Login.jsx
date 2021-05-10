import React from "react";
import "../styles/auth.scss";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { loginSchema } from "../schemas/auth";
import { useAuthContext } from "../contexts/Auth.context";
import { useAsync } from "../hooks/useAsync";
import { Spinner } from "../components/Spinner/Spinner";

export const Login = ({ history }) => {
  const { login } = useAuthContext();
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
    await run(login(values));
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
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => onSubmit(values)}
          validationSchema={loginSchema}
        >
          {() => (
            <Form className="form">
              <p className="form-heading">Sign In to your account</p>
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
              <button disabled={isLoading} className="submit-btn" type="submit">
                {isLoading ? <Spinner /> : "Sign In"}
              </button>
            </Form>
          )}
        </Formik>
        <div className="actions">
          Don't have an account?{"  "}
          <button onClick={() => history.push("register")}> Sign Up </button>
        </div>
      </div>
    </div>
  );
};
