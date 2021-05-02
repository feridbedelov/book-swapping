import { Switch, Route } from "react-router-dom";
import Layout from "../components/Layout";
import {
  HomePage,
  MyBooks,
  ProfilePage,
  NewBook,
  BookEdit,
  BookDetailView,
} from "../pages";
import { ScrollToTop } from "../components/ScrollToTop";

export default function AuthApp() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/my-books" component={MyBooks} />
          <Route exact path="/books/detail/:id" component={BookDetailView} />
          <Route exact path="/my-books/new" component={NewBook} />
          <Route exact path="/my-books/edit/:id" component={BookEdit} />
        </Switch>
      </Layout>
    </>
  );
}
