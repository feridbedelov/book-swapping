import "./index.scss";
import { Link } from "react-router-dom";
import { imageBaseUrl } from "../../consts";

export const Book = ({ book }) => {
  const showTitle = () => {
    return book?.title?.length < 20
      ? book?.title
      : book?.title?.slice(0, 14) + "...";
  };

  return (
    <div className="card">
      <img
        src={`${imageBaseUrl}/${book?.imagePath}`}
        className="card-img-top"
        alt={book?.title}
        style={{ minHeight: 350, maxHeight: 350 }}
      />
      <div className="card-body">
        <div className="d-flex align-items-start">
          <h6 className="card-title"> {showTitle()}</h6>
        </div>

        <Link to={`/books/detail/${book?.id}`} className="book-more-btn">
          View More
        </Link>
      </div>
    </div>
  );
};
