import "../styles/mybooks.scss";
import { Link } from "react-router-dom";
import { BooksList } from "../components/BooksList";
import { data } from "../data";

export function MyBooks() {
  return (
    <div className="my-books-container">
      <div className="header">
        <h3>My books</h3>
        <Link to="/my-books/new">Add Book</Link>
      </div>
      <div className="my-books-list">
        <BooksList books={data} goTo="edit" />
      </div>
    </div>
  );
}
