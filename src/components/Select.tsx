import { FC, useRef } from "react";

interface iSelectProps {
    changeData: (url: string) => void
    setIsSelected: (val: boolean) => void
}

const Select: FC<iSelectProps> = ({ changeData, setIsSelected }) => {

    const selectRef = useRef<any>(null)

    function clickHandler() {

        if (selectRef.current.value !== "") {
            changeData(selectRef.current.value)
            setIsSelected(true)
        }
    }

    return (
        <div className="select-api-div">
            <label htmlFor="selectedApi">Please Select an API</label>
            <input type="url" placeholder={"https://jsonplaceholder.typicode.com/users"} id={"selectedApi"} ref={selectRef} onKeyUp={(e) => {
                if (e.key === "Enter") {
                    clickHandler()
                }
            }} />
            <button className="accept-button" onClick={clickHandler}>Accept</button>
        </div>
    );
}

export default Select;