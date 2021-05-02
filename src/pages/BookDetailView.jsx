import { useState } from "react";
import { OfferModal } from "../components/OfferModal";
import "../styles/bookDetail.scss";

export function BookDetailView() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
      <div className="book-detail-container">
        <div className="row p-5 text-white">
          <div className="col-md-7">
            <h2 className="title">The Naked Sun</h2>
            <div className="details">
              <h4 className="subtitle">Author: Isaac Asimov </h4>
              <p>Page Size: 300 </p>
              <p>
                <b>Farid11</b> offers this book
              </p>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                optio fuga quaerat facilis tenetur impedit, provident saepe!
                Qui, sapiente dignissimos dolores voluptatum, asperiores rem
                aliquid, hic fuga beatae sunt voluptates accusamus expedita
                blanditiis facere cupiditate mollitia modi molestiae ipsum cum.
                Quod nihil incidunt iste laboriosam, odit mollitia iusto
                dolores. Inventore ducimus iure recusandae, laborum architecto
                nesciunt facilis doloribus nam voluptatem? Aliquid ad
                necessitatibus dolor error sint laboriosam impedit facere
                reprehenderit!
              </p>
            </div>
          </div>
          <div className="col-md-5">
            <div className="img-wrapper">
              <img
                className="img-fluid rounded"
                src="https://picsum.photos/300/350"
                alt="book-title"
              />
            </div>
            <div className="meta">
              <span>Tag1</span>
              <span>Tag2</span>
              <span>Tag3</span>
              <span>Tag4</span>
              <span>Tag5</span>
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
      >
        Salam
      </OfferModal>
    </>
  );
}
