import { Book } from "../BookCard";
import "./index.scss";

export const BooksList = ({ books, goTo }) => {
  const linkUrl = (id) => {
    switch (goTo) {
      case "edit":
        return `/my-books/edit/${id}`;
      case "detail":
        return `/books/detail/${id}`;
      default:
        break;
    }
  };

  if (books && !books.length) {
    return <div>No book found</div>;
  }

  return (
    <div className="books-list">
      {books.map((book) => (
        <Book book={book} key={book.id} linkUrl={linkUrl(book.id)} />
      ))}
    </div>
  );
};
