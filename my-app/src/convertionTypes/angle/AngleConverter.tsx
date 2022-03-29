import React, { useState } from "react";
import Angle from "./convertingFns/Angle";
// import myRound from "../../utils/myRound";

// function getOption(value: string) {
//     return <option value={value}>{value}</option>;
// }

const AngleConverter: React.FC = () => {
    const [input, setInput] = useState("0");
    const [output, setOutput] = useState("0");
    const angle: Angle = new Angle(0);

    // const units: string[] = [
    //     "degrees", "gradians", "mils", "radians"
    // ];

    const handleTyping = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setInput(event.target.value);
        angle.degrees = parseFloat(event.target.value);
        setOutput(angle.mils.toFixed(2));
    };

    return (
        <div >
            <input name="" type="text" value={input} onChange={handleTyping} /> degrees
            {/*
            <form >
                <label>Choose unit</label>
                &nbsp; &nbsp;
                <select value={units}>
                    {units.map(unit => getOption(unit))}
                </select>
                <br /> <br />
                <input type="submit" value="Go To the Game" />
            </form>
	     */}
            <h1>&#187;</h1>
            <p>{output} mils</p>
        </div>
    )
}

export default AngleConverter;
