import "../styles/mybooks.scss";
import { Link } from "react-router-dom";
import { BooksList } from "../components/BooksList";
import { useQuery } from "react-query";
import { getMyBooks } from "../services/book.provider";

export function MyBooks() {
  const { data } = useQuery("my-books", getMyBooks);

  return (
    <div className="my-books-container">
      <div className="header">
        <h3>My books</h3>
        <Link to="/my-books/new">Add Book</Link>
      </div>
      <div className="my-books-list">
        {data && <BooksList books={data} goTo="edit" />}
      </div>
    </div>
  );
}
