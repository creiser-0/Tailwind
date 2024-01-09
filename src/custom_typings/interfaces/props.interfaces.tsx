import { iCellData } from "./table.interfaces"

export interface iSelectProps {
    changeData: (url: string) => void
    setIsSelected: (val: boolean) => void
}

export interface iModalProps {
    modalInfo: any
    setShowModal: (val: boolean) => void
    setModalInfo: (info: iCellData | string) => void
}