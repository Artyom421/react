import { useState } from "react"

export const Scrtipt = () => {

    const [state, setState] = useState("")



    return ( 
        <div>

            <h2>Write Text</h2>

            <p className="ptag">{state}</p>
            <input 
            type="text" 
            value={state} 
            onChange={(evt) => {
                setState(evt.target.value)
            }}
            />

        </div>
    )
} 