import { BookForm } from "../components/BookForm";
import "../styles/newBook.scss";

export const NewBook = () => {
  return (
    <div className="new-book-container">
      <h2 className="title">Add New Book</h2>
      <div className="hr" />
      <BookForm />
    </div>
  );
};
