import { useState, useEffect } from "react";

const ItemValue = ({onClick}) => {
    const [value, setValue] = useState(true)
    let textButton = ''
    useEffect(()=>{
        if (value==true) {
            textButton = 'Anotarme'
        }
    },[value])

    const onChangeHandler = (event) => {

        setValue(false)
        console.log(value)
    }

    return (
        <div>
            <input type="button" value='Anotarme' onClick={()=> {onClick(value)}} ></input>

        </div>
    )


}

export default ItemValue