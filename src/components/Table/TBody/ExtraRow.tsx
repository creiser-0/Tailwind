import { FC } from "react"
import NestedCell from "./NestedCell"

interface iCellData {
    [key: string]: iCellData
}

interface iExtraRowProps {
    data: any[]
    setModalInfo: (info: iCellData | string) => void
}

const ExtraRow: FC<iExtraRowProps> = ({ data, setModalInfo }) => {

    const cellList = data.map((cellData: any, i) => {
        return (
            // <td key={i} >
            <div  key={i}>
                {(cellData !== 0) &&
                    <>
                        <p>{cellData.key}</p>
                        <NestedCell setModalInfo={setModalInfo} cell={cellData.content} />
                    </>}
            </div>
            // </td>
        )
    })

    return (
        <tr className="extra-row">
            <td></td>
            <td colSpan={data.length-1}>
                <div className="nested-div">{cellList}</div>
            </td>
            {/* {cellList} */}
        </tr>
    )
}

export default ExtraRow