import { FC, MutableRefObject, useEffect, useState } from "react";
import slash from "../../../assets/slash.png"
import ascending from "../../../assets/ascending.png"
import descending from "../../../assets/descending.png"


interface iHeaderTable {
    header: string
    changeFilter: (header: string, sortOrder: number) => void
    currentHeader:MutableRefObject<string>
}

const Header: FC<iHeaderTable> = ({ header, changeFilter, currentHeader}) => {
    

    const [sortOrder, setSortOrder] = useState(0)

    const [img, setImage] = useState(slash)

    useEffect(()=>{
        if (currentHeader.current !== header){
            setSortOrder(0)
            setImage(slash)
        }
    })

    useEffect(() => {
        if (sortOrder === 1) {
            setImage(ascending)
        } else if (sortOrder === 2) {
            setImage(descending)
        } else {
            setImage(slash)
        }
    }, [sortOrder])

    function nextSort() {
        if (sortOrder === 2 ) {
            currentHeader.current = ""
            setSortOrder(0)
            return 0
        } else {
            currentHeader.current = header
            setSortOrder(sortOrder + 1)
            return sortOrder + 1
        }
    }

    return (
        <th onClick={() => {
            changeFilter(header, nextSort())
        }}>
            {header}
            {<img className="filter-image" src={img} />}
        </th>
    )
}


export default Header