import "./Modal.css";

interface ModalProps {
    onClickConfirm: () => void,
    onClickCancel: () => void,
    text: string 
}

const Modal: React.FC<ModalProps> = ({onClickConfirm, onClickCancel, text}) => {

    return (
        <div className="dialog-overlay">
        <div className="dialog">
          <p>{text}</p>
          <button onClick={onClickConfirm}>OK</button>
          <button onClick={onClickCancel}>CANCEL</button>
        </div>
      </div>
    )
}

export default Modal;