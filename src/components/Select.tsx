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
            {/* <select name="selectedApi" id="selectedApi" ref={selectRef}>
                <option value="">--Please choose an option--</option>
                <option value="https://jsonplaceholder.typicode.com/users">Users</option>
                <option value="https://pokeapi.co/api/v2/berry">Berry's</option>
                <option value="https://pokeapi.co/api/v2/berry/1/">Berry 1</option>
            </select> */}
                <input type="url" placeholder={"https://jsonplaceholder.typicode.com/users"} id={"selectedApi"} ref={selectRef} onKeyUp={(e)=>{if(e.key=== "Enter"){
                    clickHandler()
                }}}/>
            <button className="accept-button" onClick={clickHandler}>Accept</button>
        </div>
    );
}

export default Select;