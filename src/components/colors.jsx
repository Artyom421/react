import { useState } from "react"

export const Colors = () => {
    
    const [color,setColor] = useState('white')
    const [height,setHeight] = useState(0)
    const [width,setWidth] = useState(0)
    const [radius,setRadius] = useState(0)

//     height: 50px;
//   width: 50px;
//   border-radius: 50%;
//   border: 1px solid #282828;
    
    return(
        <div>
            <h1>Change Color</h1>
            <div className="colordivparent">
                <div className="inputs">
                    <input type="text" placeholder="height px" onChange={ (evt) => setHeight(evt.target.value) }/>
                    <input type="text" placeholder="width px" onChange={ (evt) => setWidth(evt.target.value) }/>
                    <input type="text" placeholder="color" onChange={ (evt) => setColor(evt.target.value) }/>
                    <input type="text" placeholder="radius %" onChange={ (evt) => setRadius(evt.target.value) }/>
                </div>
                <div className="colordiv" 
                    style={{
                            backgroundColor: color,
                            height: height ,
                            width: width ,
                            borderRadius: radius,
                        }
                        }>
                </div>
            </div>
        </div>
    )
}