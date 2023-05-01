import { Button, Modal } from "react-bootstrap";
import style from "./ShopContact.module.css";

function AlertContact({ show, onClose, message }) {
  return (
    <Modal show={show} onHide={onClose} className={style.mymodal}>
      <Modal.Header closeButton className={style.mymodalheader}>
        <Modal.Title className={style.titlealert}></Modal.Title>
      </Modal.Header>
      <Modal.Body className={style.mensajealert}>{message}</Modal.Body>
      <Modal.Footer>
        <Button className={style.botonalert} variant="secondary" onClick={onClose}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AlertContact;