import { FC } from "react";
import "../index.css"

interface iTHeadProps {
    keys: string[]
    addExpand: boolean
}

const THead: FC<iTHeadProps> = ({ keys, addExpand }) => (
    <thead>
        <tr className="head-row">
            {addExpand ? <th> </th> : <></>}
            {keys.map((key) => {
                return (
                    <th key={key}>{key}</th>
                )
            })}
        </tr>
    </thead>
)
export default THead