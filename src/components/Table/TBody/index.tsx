import { FC, ReactElement, useRef, useState } from "react";
import BodyRow from "./BodyRow";
import "../index.css"


interface iData {
    [key: string]: any
}

interface iCellData {
    [key: string]: iCellData
}

interface iTBodyProps {
    data: iData[] | iData
    setModalInfo: (info: iCellData | string) => void
    removeExpand: () => void
    filterHeader: string
    filterOrder: number
}


const TBody: FC<iTBodyProps> = ({ data, setModalInfo, removeExpand, filterHeader, filterOrder }) => {

    function filter(rowList: ReactElement[], header: string, filterOrder: number) {
        const rowListCopy = rowList
        if (filterOrder === 1) {
            switch (typeof rowListCopy[0].props.rowData[header]) {
                case "string":
                    return rowListCopy.sort((a, b) => a.props.rowData[header][0].toLowerCase().charCodeAt() - b.props.rowData[header][0].toLowerCase().charCodeAt())
                case "number":
                    return rowListCopy.sort((a, b) => a.props.rowData[header] - b.props.rowData[header])
            }

        } else if (filterOrder === 2) {
            switch (typeof rowListCopy[0].props.rowData[header]) {
                case "string":
                    return rowListCopy.sort((a, b) => b.props.rowData[header][0].toLowerCase().charCodeAt() - a.props.rowData[header][0].toLowerCase().charCodeAt())
                case "number":
                    return rowListCopy.sort((a, b) => b.props.rowData[header] - a.props.rowData[header])
            }

        }

        return rowList
    }

    let rowList;

    const [addExpand, setAddExpand] = useState(true)

    if (Array.isArray(data)) {
        const rowListNotSorted = data.map((rowData, i) => <BodyRow setModalInfo={setModalInfo} key={i} rowData={rowData} addExpand={addExpand} setAddExpand={setAddExpand} removeExpand={removeExpand} style={i % 2 == 0 ? "body-row" : "body-row bg-slate-300"} />)
        rowList = filter(rowListNotSorted, filterHeader, filterOrder)

    } else {
        rowList = <BodyRow setModalInfo={setModalInfo} rowData={data} addExpand={addExpand} setAddExpand={setAddExpand} removeExpand={removeExpand} style="body-row" />
    }

    const tbody = useRef(null)


    return (
        <tbody className="tbody" ref={tbody}>
            {rowList}
        </tbody>
    )
}


export default TBody