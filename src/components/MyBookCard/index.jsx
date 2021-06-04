import "./index.scss";
import { useHistory } from "react-router-dom";
import { imageBaseUrl } from "../../consts";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { deleteSingleBook } from "../../services/book.provider";
import { Spinner } from "../Spinner/Spinner";
import { queryClient } from "../../contexts";
import { toast } from "react-toastify";

export const MyBook = ({ book }) => {
  const history = useHistory();
  const [confirmationPopup, setConfirmationPopup] = useState(false);
  const [loadingConfirm, setConfirmLoading] = useState(false);

  const showTitle = () => {
    return book?.title?.length < 20
      ? book?.title
      : book?.title?.slice(0, 20) + "...";
  };

  const onEdit = () => {
    history.push(`/my-books/edit/${book?.id}`);
  };

  const onDeleteConfirm = async () => {
    setConfirmLoading(true);
    try {
      await deleteSingleBook(book?.id);
      toast.success("Successfully deleted");
      await queryClient.invalidateQueries("my-books");
    } catch (error) {
      console.log(error);
    } finally {
      toast.error("Server error");
      setConfirmLoading(false);
      setConfirmationPopup(false);
    }
  };

  const onDelete = () => {
    setConfirmationPopup(true);
  };

  return (
    <>
      <div className="card">
        <img
          src={`${imageBaseUrl}/${book?.imagePath}`}
          style={{ maxHeight: "300px" }}
          className="card-img-top"
          alt={book?.title}
        />
        <div className="card-body">
          <div className="d-flex align-items-start">
            <h6 className="card-title"> {showTitle()}</h6>
          </div>
          <Button onClick={onEdit} size="sm" className="book-more-btn mr-2">
            Edit
          </Button>
          <Button onClick={onDelete} size="sm" className="book-more-btn">
            Delete
          </Button>
        </div>
      </div>
      <Modal
        onHide={() => setConfirmationPopup(false)}
        show={confirmationPopup}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirmation Popup</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Do you want to delete this book?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button
            onClick={() => setConfirmationPopup(false)}
            variant="secondary"
          >
            Close
          </Button>
          <Button
            disabled={loadingConfirm}
            onClick={onDeleteConfirm}
            variant="primary"
          >
            {loadingConfirm ? <Spinner /> : "Confirm"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
