import { FC } from "react";
import "../index.css"

interface iTHeadProps {
    keys: string[]
    addExpand: boolean
    changeFilter: (header: string, sortOrder: number) => void
}

const THead: FC<iTHeadProps> = ({ keys, addExpand, changeFilter }) => {


    const headerList = keys.map((key) => {
        return (
            <th key={key}>
                {key}
                <button onClick={()=>changeFilter(key, 1)}>A</button>
                <button onClick={()=>changeFilter(key, 2)}>D</button>
                <button onClick={()=>changeFilter(key, 0)}>N</button>
            </th>
        )
    })

    return (
        <thead>
            <tr className="head-row">
                {addExpand ? <th> </th> : <></>}
                {headerList}
            </tr>
        </thead>
    )
}
export default THead