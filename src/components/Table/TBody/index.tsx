import { FC, useState } from "react";
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
}

const TBody: FC<iTBodyProps> = ({ data, setModalInfo, removeExpand }) => {

    let rowList;

    const [addExpand, setAddExpand] = useState(true)

    if (Array.isArray(data)) {
        rowList = data.map((rowData, i) => <BodyRow setModalInfo={setModalInfo} key={i} rowData={rowData} addExpand={addExpand} setAddExpand={setAddExpand} removeExpand={removeExpand} style={i % 2 == 0 ? "body-row":"body-row bg-slate-300"} />)
    } else {
        rowList = <BodyRow setModalInfo={setModalInfo} rowData={data} addExpand={addExpand} setAddExpand={setAddExpand} removeExpand={removeExpand} style="body-row"/>
    }


    return (
        <tbody className="tbody">
            {rowList}
        </tbody>
    )
}


export default TBody