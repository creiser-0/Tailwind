import { FC, useRef } from "react";
import { iTHeadProps } from "../../../custom_typings/interfaces/table.interfaces";
import Header from "./HeaderTable";
import "../index.css"



const THead: FC<iTHeadProps> = ({ keys, addExpand, changeFilter }) => {

    const currentHeader = useRef("")

    const headerList = keys.map((key, i) => {
        return (
            <Header key={key} header={key} changeFilter={changeFilter} currentHeader={currentHeader}/>
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