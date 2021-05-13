import "./index.scss";
import { Link } from "react-router-dom";
import { Image, OverlayTrigger, Tooltip } from "react-bootstrap";

export const Book = ({ book, linkUrl }) => {
  const showTitle = () => {
    return book?.bookTitle.length < 12
      ? book?.bookTitle
      : book?.bookTitle.slice(0, 12) + "...";
  };

  return (
    <div className="card">
      <img
        src="https://picsum.photos/400"
        className="card-img-top"
        alt={book?.bookTitle}
      />
      <div className="card-body">
        <div className="d-flex align-items-start">
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={`tooltip-top`}>{book?.userName}</Tooltip>}
          >
            <Image src={book?.userImage} alt={book?.userName} roundedCircle />
          </OverlayTrigger>
          <h6 className="card-title ml-2"> {showTitle()}</h6>
        </div>
      </div>
      <div className="card-body">
        <Link to={linkUrl} className="book-more-btn">
          More{" "}
        </Link>
      </div>
    </div>
  );
};
