import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "./Home";
import Login from "./login";
import Register from "./register";
import Profile from "./Profile";
import MyBooks from "./MyBooks";

const App = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />

      <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/my-books" component={MyBooks} />
      </Layout>
    </Switch>
  );
};

export default App;
