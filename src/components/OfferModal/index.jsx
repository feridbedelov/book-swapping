import "./index.scss";
import { Modal, Button, ListGroup, Spinner } from "react-bootstrap";
import { getMyBooks } from "../../services/book.provider";
import { useQuery } from "react-query";
import { useState } from "react";

export const OfferModal = ({
  show,
  onHide,
  title,
  onClickOkay,
  okayBtnText,
}) => {
  const {
    data: myBooks,
    isError: booksError,
    isLoading: booksLoading,
  } = useQuery("my-books", getMyBooks, { enabled: show });

  const [selectedBook, setSelectedBook] = useState("");

  const onOkay = () => {
    onClickOkay();
  };

  const onCancel = () => {
    setSelectedBook(null);
    onHide();
  };

  const disableOkay = () => booksError || booksLoading || !selectedBook;

  const renderBody = () => {
    if (booksLoading) {
      return <Spinner />;
    } else if (booksError) {
      return <p>Error occured, Try again later</p>;
    } else if (myBooks && myBooks.length) {
      return myBooks.map((book) => {
        return (
          <ListGroup.Item
            active={book?.id === selectedBook?.id}
            action
            onClick={() => setSelectedBook(book)}
          >
            {book.title}
          </ListGroup.Item>
        );
      });
    }
  };

  return (
    <Modal show={show} onHide={onHide} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup variant="flush">{renderBody()}</ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Close
        </Button>
        <Button disabled={disableOkay()} onClick={onOkay} variant="primary">
          {okayBtnText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
