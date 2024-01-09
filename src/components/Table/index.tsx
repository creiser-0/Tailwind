import { iTableProps } from "../../custom_typings/interfaces/table.interfaces";
import { FC, useState } from "react";
import TBody from "./TBody";
import THead from "./THead";



const Table: FC<iTableProps> = ({ data, setModalInfo }) => {

    const [addExpand, setAddExpand] = useState(true)

    function removeExpand() {
        setAddExpand(false)
    }

    const [filter, setFilter] = useState<[string, number]>(["noFilter", 3]) 

    function changeFilter(header:string, sortOrder:number){
        setFilter([header, sortOrder])
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
                    <THead keys={keys} addExpand={addExpand} changeFilter={changeFilter}></THead>
                    <TBody setModalInfo={setModalInfo} data={data} removeExpand={removeExpand} filterHeader={filter[0]} filterOrder={filter[1]}></TBody>
                </table>
            )}
        </div>
    );

}


export default Table;