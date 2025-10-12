import { useState } from "react"

function ColorPicker() {
    const [color, setColor] = useState("#ffffff");

    function handleColorChange(event){
        setColor(event.target.value);
    }

    return (
        <div className="Container">
            <h1>Color Picker</h1>
            <div className="displayColor" style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>

            <br />

            <label>Select a color</label>
            <input value={color} onChange={handleColorChange} type="color" className="ColorPicker"/>
        </div>
    )
}

export default ColorPicker