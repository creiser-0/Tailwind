import { FC } from "react"
import { iExtraRowProps } from "../../../custom_typings/interfaces/table.interfaces"
import NestedCell from "./NestedCell"


const ExtraRow: FC<iExtraRowProps> = ({ data, setModalInfo }) => {

    const cellList = data.map((cellData, i) => {
        return (
            <div key={i} className="flex flex-col items-center">
                {(cellData !== 0) &&
                    <>
                        <p className="extra-row-caption">{cellData.key}</p>
                        <NestedCell setModalInfo={setModalInfo} cell={cellData.content} />
                    </>}
            </div>
        )
    })

    return (
        <tr className="extra-row">
            <td></td>
            <td colSpan={data.length - 1}>
                <div className="flex flex-row my-2 justify-between">
                    {cellList}
                </div>
            </td>

        </tr>
    )
}

export default ExtraRow