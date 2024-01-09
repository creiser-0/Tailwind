import { FC, useState } from "react";
import "../index.css"
import Header from "./HeaderTable";

interface iTHeadProps {
    keys: string[]
    addExpand: boolean
    changeFilter: (header: string, sortOrder: number) => void
}

const THead: FC<iTHeadProps> = ({ keys, addExpand, changeFilter }) => {


    const headerList = keys.map((key, i) => {
        return (
            <Header key={key} header={key} changeFilter={changeFilter} />
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