import { MyBook } from "../MyBookCard";
import "./index.scss";

export const MyBookList = ({ books }) => {
  if (books && !books.length) {
    return <div>No book found</div>;
  }

  return (
    <div className="row py-4 px-4">
      {books?.map((book) => {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-3"
            key={book.id}
          >
            <MyBook book={book} />
          </div>
        );
      })}
    </div>
  );
};
