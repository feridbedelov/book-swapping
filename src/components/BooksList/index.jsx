import { Book } from "../BookCard";
import "./index.scss";

export const BooksList = ({ books }) => {
  if (books && !books.length) {
    return <div>No book found</div>;
  }

  return (
    <div className="books-list">
      {books.map((book) => (
        <Book book={book} key={book.id} />
      ))}
    </div>
  );
};
