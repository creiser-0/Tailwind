import { FC } from "react";
import "../index.css"

interface iCellData {
    [key: string]: iCellData
}


interface iShowMoreProps {
    setModalInfo: (info: iCellData | string) => void
    data: iCellData | string
}

const ShowMore: FC<iShowMoreProps> = ({ setModalInfo, data }) => {

    let notEmpty: boolean = false

    if (!!data) {
        if (Array.isArray(data)) {
            notEmpty = (data.length !== 0)
        } else if (typeof data === "object") {
            notEmpty = (Object.keys(data).length !== 0)
        } else {
            notEmpty = !!data
        }
    }


    return <div className="flex justify-center *:font-sans h-10">
        {notEmpty ?
            <button className="show-more"
                onClick={() => setModalInfo(data)}>Show More
            </button>
            : <strong className="text-2xl">-</strong>}
    </div>
}


export default ShowMore