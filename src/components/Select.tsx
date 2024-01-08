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
        <div className="bg-green-400 flex flex-col items-center">
            <label htmlFor="selectedApi" className="text-2xl font-bold font-sans mt-2">
                Please Select an API
            </label>
            <input className="m-2 font-sans rounded" type="url" placeholder={"https://jsonplaceholder.typicode.com/users"} id={"selectedApi"} ref={selectRef} onKeyUp={(e) => {
                if (e.key === "Enter") {
                    clickHandler()
                }
            }} />
            <button className="bg-emerald-700 cursor-pointer font-sans hover:bg-emerald-800 border active:bg-emerald-900 border-black pl-1 pr-1  mb-2" onClick={clickHandler}>
                Accept
            </button>
        </div>
    );
}

export default Select;