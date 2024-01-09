import { iModalProps } from "../../custom_typings/interfaces/props.interfaces";
import { FC } from "react";
import NestedCell from "../Table/TBody/NestedCell";
import "./Modal.css"



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