import { FC } from "react";
import NestedCell from "../Table/TBody/NestedCell";


interface iModalProps {
    modalInfo: any
    setShowModal: (val: boolean) => void
}

const Modal: FC<iModalProps> = ({ modalInfo, setShowModal }) => {

    function clickHandler() {
        setShowModal(false)
    }

    return (
        <div className="modal" onClick={clickHandler}>
            <div className="modal-content" onClick={(e)=>e.stopPropagation()}>
                <button className="close-button"
                    onClick={clickHandler}>x</button>
                {modalInfo && <NestedCell setModalInfo={() => { }} cell={modalInfo} />}
            </div>
        </div>
    )
}

export default Modal;