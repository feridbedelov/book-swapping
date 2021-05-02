import "./index.scss";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

export const Book = ({ book, linkUrl }) => {
  return (
    <div className="card book-card" style={{ width: "275px" }}>
      <img
        src="https://picsum.photos/275/250"
        className="card-img-top"
        alt={book?.bookTitle}
      />
      <div className="card-body">
        <div className="d-flex align-items-start">
          <Image src={book?.userImage} alt={book?.userName} roundedCircle />
          <span className="card-title ml-2">{book?.bookTitle}</span>
        </div>
        <div className="btn-wrapper">
          <Link to={linkUrl} className="book-more-btn">
            More
          </Link>
        </div>
      </div>
    </div>
  );
};
