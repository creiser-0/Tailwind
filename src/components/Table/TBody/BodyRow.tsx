import { FC, useEffect, useRef, useState } from "react";
import Expand from "./Expand";
import ExtraRow from "./ExtraRow";
import ShowMore from "./ShowMore";

interface iData {
    [key: string]: any
}

interface iCellData {
    [key: string]: iCellData
}

interface iBodyRowProps {
    rowData: iData
    addExpand: boolean
    setModalInfo: (info: iCellData | string) => void
    setAddExpand: (val: boolean) => void
    removeExpand: () => void
    style: string
}


const BodyRow: FC<iBodyRowProps> = ({ rowData, addExpand, setModalInfo, removeExpand, setAddExpand, style }) => {



    const [canExpand, setCanExpand] = useState(true)

    const isObject = (x: {}): boolean => {
        return (typeof (x) === "object")
    }

    const extraRowData = useRef<any[]>([0])

    const keys = Object.keys(rowData)



    useEffect(() => {
        keys.map((key) => {
            if (isObject(rowData[key] || Array.isArray(rowData[key]))) {
                extraRowData.current = [...extraRowData.current, { content: rowData[key], key: key }]
            } else {
                extraRowData.current = [...extraRowData.current, 0]
            }
        })
        if (extraRowData.current.every((x) => x === 0)) {
            /* if (extraRowData.current.length === 1) */
            removeExpand()
            setAddExpand(false)
        }
    }, [])



    const cellsList = keys.map((key) =>
        <td key={key}>
            {(isObject(rowData[key]) || Array.isArray(rowData[key])) ?
                (canExpand && <ShowMore setModalInfo={setModalInfo} data={rowData[key]} />)
                : String(rowData[key])}
        </td>
    )


    return (
        <>
            <tr className={style}>
                {addExpand ? <Expand canExpand={canExpand} setCanExpand={setCanExpand} /> : <></>}
                {cellsList}
            </tr>
            {!canExpand && <ExtraRow setModalInfo={setModalInfo} data={extraRowData.current} />}
        </>
    )
}

export default BodyRow