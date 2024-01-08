import { FC , useState } from "react";
import BodyRow from "./BodyRow";


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
        rowList = data.map((rowData, i) => <BodyRow setModalInfo={setModalInfo} key={i} rowData={rowData} addExpand={addExpand} setAddExpand={setAddExpand} removeExpand={removeExpand} />)
    } else {
        rowList = <BodyRow setModalInfo={setModalInfo} rowData={data} addExpand={addExpand} setAddExpand={setAddExpand} removeExpand={removeExpand} />
    }


    return (
        <tbody>
            {rowList}
        </tbody>
    )
}


export default TBody