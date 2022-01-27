import { useState } from "react"

export const ScriptTitle = () => {

    const [value, setValue] = useState("")

    document.title = value

    return( 
        <div>
            <h2>Change Document Title</h2>
            <input 
            type="text"
            value={value} 
            onChange={ (evt) => {
                setValue(evt.target.value)
            }}/>
        </div>
    )
}