import { iNestedCellProps, iCellData } from "../../../custom_typings/interfaces/table.interfaces";
import { FC } from "react";
import Table from "..";
import "../index.css"



const NestedCell: FC<iNestedCellProps> = ({cell,setModalInfo}) => {

    function createCell(cellData: iCellData) {

        if (!cellData){
            return "NONE"
        }
    
        if (Array.isArray(cellData)){
            return <Table data={cellData} setModalInfo={setModalInfo}/>
        }

        const keys = Object.keys(cellData)

        const headersList = keys.map((key) => {
            return (
                <th key={key}>{key}</th>
            )
        })

        const cellsList = keys.map((key) => {
            return (
            <td key={key}>
                {(typeof cellData[key] === "object")?createCell(cellData[key]):String(cellData[key])}
            </td>
            )
        })

        return (
            <table className="table">
                <thead>
                    <tr className="head-row ">
                        {headersList}
                    </tr>
                </thead>
                <tbody>
                    <tr className="body-row *:border-x">
                        {cellsList}
                    </tr>
                </tbody>
            </table>
        )
    }

    return (
        <div className="text-center font-sans text-sm">
            {(typeof cell !== "object") ? cell : createCell(cell)}
        </div>
    )

}


export default NestedCell