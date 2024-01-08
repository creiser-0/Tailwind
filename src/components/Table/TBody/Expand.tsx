import { FC } from "react";


interface iExpandProps{
    canExpand: boolean
    setCanExpand: (val:boolean) => void
}

const Expand: FC<iExpandProps> = ({canExpand, setCanExpand}) => {

    
    function clickHandler(){
        setCanExpand(!canExpand)
    }

    return (
        <td onClick={clickHandler} className="expand">
            <div className="image-div">
                <img className={canExpand?"expand-button":"retract-button"}
                    src="https://cdn-icons-png.flaticon.com/512/60/60781.png"
                    alt="down/up arrow" 
                    title={canExpand?"Expand info":"Retract info"}
                    />
            </div>
        </td>
    )
}


export default Expand