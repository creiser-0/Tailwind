import { FC } from "react";

interface iTHeadProps {
    keys: string[]
    addExpand: boolean
}

const THead: FC<iTHeadProps> = ({ keys, addExpand }) => (
    <thead>
        <tr>
            {addExpand ? <th className="expand"> </th> : <></>}
            {keys.map((key) => {
                return (
                    <th key={key}>{key}</th>
                )
            })}
        </tr>
    </thead>
)
export default THead