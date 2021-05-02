import "./index.scss";
import { Modal, Button } from "react-bootstrap";

export const OfferModal = ({
  show,
  onHide,
  children,
  title,
  onClickOkay,
  okayBtnText,
}) => {
  return (
    <Modal show={show} onHide={onHide} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button onClick={onClickOkay} variant="primary">
          {okayBtnText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
