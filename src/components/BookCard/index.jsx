import "./index.scss";

export const Book = ({ book }) => {
  return (
    <div className="book-card">
      <div className="image">
        <img alt="" src="https://picsum.photos/300/250" />
      </div>
      <div className="meta">
        <div className="avatar-wrapper">
          <img src={book?.userImage} alt={book?.userName} />
        </div>
        <div>
          <div>
            <p className="meta-text">
              <strong>Title:</strong> {book?.bookTitle}
            </p>
          </div>
          <div>
            <p className="meta-text">
              <strong>Author:</strong> {book?.bookAuthor}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
