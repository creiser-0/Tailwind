import { FC } from "react";
import Table from "..";



interface iCellData {
    [key: string]: iCellData
}

interface iNestedCellProps {
    cell: iCellData | string
    setModalInfo: (info: iCellData | string) => void
}

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
            <table>
                <thead>
                    <tr>
                        {headersList}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {cellsList}
                    </tr>
                </tbody>
            </table>
        )
    }

    return (
        <div className="nested">
            {(typeof cell !== "object") ? cell : createCell(cell)}
        </div>
    )

}


export default NestedCell