import { Switch, Route } from "react-router-dom";
import Layout from "../components/Layout";
import { ProtectedRoute } from "../components/Route";
import { RedirectToHome } from "../components/Route/redirectToHome";
import {
  HomePage,
  MyBooks,
  ProfilePage,
  NewBook,
  BookEdit,
  BookDetailView,
  Register,
  Login,
  Logout,
} from "../pages";

export default function App() {
  return (
    <Switch>
      <RedirectToHome exact path="/login" component={Login} />
      <RedirectToHome exact path="/register" component={Register} />
      <Route exact path="/logout" component={Logout} />

      <Layout>
        <ProtectedRoute exact path="/" component={HomePage} />
        <ProtectedRoute exact path="/profile" component={ProfilePage} />
        <ProtectedRoute exact path="/my-books" component={MyBooks} />
        <ProtectedRoute
          exact
          path="/books/detail/:id"
          component={BookDetailView}
        />
        <ProtectedRoute exact path="/my-books/new" component={NewBook} />
        <ProtectedRoute exact path="/my-books/edit/:id" component={BookEdit} />
      </Layout>
    </Switch>
  );
}
