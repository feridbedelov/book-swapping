import { BookForm } from "../components/BookForm";
import "../styles/bookEdit.scss";

export const BookEdit = () => {
  return (
    <div className="new-book-container">
      <h2 className="title">Edit the book</h2>
      <div className="hr" />
      <BookForm />
    </div>
  );
};
