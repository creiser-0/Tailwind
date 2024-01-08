import { FC, useRef } from "react";
import "./Select.css"

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
        <div className="select-div">
            <label htmlFor="selectedApi" className="label">
                Please Select an API
            </label>
            <input className="input-api" type="url" placeholder={"https://jsonplaceholder.typicode.com/users"} id={"selectedApi"} ref={selectRef} onKeyUp={(e) => {
                if (e.key === "Enter") {
                    clickHandler()
                }
            }} />
            <button className="select-button" onClick={clickHandler}>
                Accept
            </button>
        </div>
    );
}

export default Select;