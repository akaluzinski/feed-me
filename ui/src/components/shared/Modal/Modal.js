import ReactDOM from "react-dom";

import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";

const portalOverlaysElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalOverlaysElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalOverlaysElement
      )}
    </>
  );
};

export default Modal;
