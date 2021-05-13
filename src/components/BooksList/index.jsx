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
    <div className="row py-4 px-4">
      {books.map((book) => {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-3"
            key={book.id}
          >
            <Book book={book} linkUrl={linkUrl(book.id)} />
          </div>
        );
      })}
    </div>
  );
};
