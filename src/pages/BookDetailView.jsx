import { useState } from "react";
import { useQuery } from "react-query";
import { OfferModal } from "../components/OfferModal";
import { FullPageSpinner } from "../components/Spinner/FullPageSpinner";
import { imageBaseUrl } from "../consts";
import { fetchSingleBook } from "../services/book.provider";
import "../styles/bookDetail.scss";

export function BookDetailView({ match }) {
  const [modalShow, setModalShow] = useState(false);
  const {
    params: { id },
  } = match;

  const {
    data: bookDetails,
    isLoading,
    isError,
  } = useQuery(["book", id], () => fetchSingleBook(id));

  if (isLoading) {
    return (
      <div className="book-detail-container">
        <FullPageSpinner />;
      </div>
    );
  }

  if (isError) {
    return (
      <div className="book-detail-container text-white d-flex justify-content-center align-items-center">
        Server Error
      </div>
    );
  }

  const { author, title, description, imagePath, pageNum, user } = bookDetails;

  return (
    <>
      <div className="book-detail-container">
        <div className="row p-5 text-white">
          <div className="col-md-7">
            <h2 className="title">{title}</h2>
            <div className="details">
              <h4 className="subtitle">Author: {author} </h4>
              <p>Page Size: {pageNum} pages </p>
              <p>
                <b>{user?.fullName}</b> offers this book
              </p>
              <p className="description">{description}</p>
            </div>
          </div>
          <div className="col-md-5">
            <div className="img-wrapper mb-4">
              <img
                className="img-fluid rounded"
                src={`${imageBaseUrl}/${imagePath}`}
                alt={title}
              />
            </div>

            <div className="request-wrapper">
              <button
                onClick={() => setModalShow(true)}
                className="btn btn-success mb-2"
              >
                {" "}
                Swap Request{" "}
              </button>
              <p>
                Note: Swap request will be sent via email and that email will
                contain the book you offer
              </p>
            </div>
          </div>
        </div>
      </div>
      <OfferModal
        title="Offer one of your book"
        show={modalShow}
        onHide={() => setModalShow(false)}
        onClickOkay={() => setModalShow(false)}
        okayBtnText="Send email"
      />
    </>
  );
}
