import { FC, useRef, useState } from "react";
import { iTBodyProps, iData } from "../../../custom_typings/interfaces/table.interfaces";
import BodyRow from "./BodyRow";
import "../index.css"




const TBody: FC<iTBodyProps> = ({ data, setModalInfo, removeExpand, filterHeader, filterOrder }) => {

    function filter(data: iData[], header: string, filterOrder: number) {
        const dataCopy = data
        if (filterOrder === 1) {
            switch (typeof dataCopy[0][header]) {
                case "string":
                    return dataCopy.sort((a, b) => a[header][0].toLowerCase().charCodeAt() - b[header][0].toLowerCase().charCodeAt())
                case "number":
                    return dataCopy.sort((a, b) => a[header] - b[header])
            }

        } else if (filterOrder === 2) {
            switch (typeof dataCopy[0][header]) {
                case "string":
                    return dataCopy.sort((a, b) => b[header][0].toLowerCase().charCodeAt() - a[header][0].toLowerCase().charCodeAt())
                case "number":
                    return dataCopy.sort((a, b) => b[header] - a[header])
            }

        }
        return dataCopy
    }

    let rowList;

    const [addExpand, setAddExpand] = useState(true)

    if (Array.isArray(data)) {
        const dataSorted = filter(data, filterHeader, filterOrder)
        rowList = dataSorted.map((rowData, i) => <BodyRow setModalInfo={setModalInfo} key={i} rowData={rowData} addExpand={addExpand} setAddExpand={setAddExpand} removeExpand={removeExpand} style={i % 2 == 0 ? "body-row" : "body-row bg-slate-300"} />)

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