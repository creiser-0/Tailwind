import { FC, useRef, useState } from "react";
import "../index.css"
import Header from "./HeaderTable";

interface iTHeadProps {
    keys: string[]
    addExpand: boolean
    changeFilter: (header: string, sortOrder: number) => void
}

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