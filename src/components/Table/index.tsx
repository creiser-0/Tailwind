import { FC, useState } from "react";
import TBody from "./TBody";
import THead from "./THead";

interface iCellData {
    [key: string]: iCellData
}

interface iTableProps {
    data: any[] | undefined | object
    setModalInfo: (info: iCellData | string) => void
}

const Table: FC<iTableProps> = ({ data, setModalInfo }) => {

    const [addExpand, setAddExpand] = useState(true)

    function removeExpand() {
        setAddExpand(false)
    }

    let keys;

    if (Array.isArray(data)) {
        keys = Object.keys(data ? data[0] : ["NONE"])
    } else {
        keys = Object.keys(data ? data : ["NONE"])
    }
    return (
        <div className="flex justify-center mt-4 w-4/5">
            {data && (
                <table className="table">
                    <THead keys={keys} addExpand={addExpand}></THead>
                    <TBody setModalInfo={setModalInfo} data={data} removeExpand={removeExpand}></TBody>
                </table>
            )}
        </div>
    );

}


export default Table;