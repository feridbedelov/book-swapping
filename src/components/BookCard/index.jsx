import "./index.scss";
import { Link } from "react-router-dom";
import { Image, OverlayTrigger, Tooltip } from "react-bootstrap";

export const Book = ({ book, linkUrl }) => {
  const showTitle = () => {
    return book?.title?.length < 20
      ? book?.title
      : book?.title?.slice(0, 20) + "...";
  };

  return (
    <div className="card">
      <img src={book?.imagePath} className="card-img-top" alt={book?.title} />
      <div className="card-body">
        <div className="d-flex align-items-start">
          {/* <OverlayTrigger
            placement="top"
            overlay={<Tooltip id={`tooltip-top`}>{book?.user}</Tooltip>}
          >
            <Image src={book?.userImage} alt={book?.userName} roundedCircle />
          </OverlayTrigger> */}
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
