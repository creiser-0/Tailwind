import { MutableRefObject } from "react"

export interface iData {
    [key: string]: any
}

export interface iCellData {
    [key: string]: iCellData
}

export interface iTableProps {
    data: any[] | undefined | object
    setModalInfo: (info: iCellData | string) => void
}

export interface iTBodyProps {
    data: iData[] | iData
    setModalInfo: (info: iCellData | string) => void
    removeExpand: () => void
    filterHeader: string
    filterOrder: number
}

export interface iTHeadProps {
    keys: string[]
    addExpand: boolean
    changeFilter: (header: string, sortOrder: number) => void
}

export interface iHeaderTable {
    header: string
    changeFilter: (header: string, sortOrder: number) => void
    currentHeader:MutableRefObject<string>
}

export interface iExpandProps {
    canExpand: boolean
    setCanExpand: (val: boolean) => void
}

export interface iExtraRowProps {
    data: any[]
    setModalInfo: (info: iCellData | string) => void
}

export interface iNestedCellProps {
    cell: iCellData | string
    setModalInfo: (info: iCellData | string) => void
}

export interface iShowMoreProps {
    setModalInfo: (info: iCellData | string) => void
    data: iCellData | string
}