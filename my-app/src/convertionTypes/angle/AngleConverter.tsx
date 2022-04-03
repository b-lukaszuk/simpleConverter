import React, { ReactElement, useEffect, useState } from "react";
import { turns2units, units2turns } from "./convertingFns/converter";

interface unitsChoice {
    id: number;
    unit: string;
}

const AngleConverter: React.FC = () => {
    const [input, setInput] = useState("0");
    const [inUnits, setInUnits] = useState("degrees");
    const [angleTurns, setAngleTurns] = useState(0);

    const units: unitsChoice[] = [
        { id: 0, unit: "degrees" },
        { id: 1, unit: "gradians" },
        { id: 2, unit: "mils" },
        { id: 3, unit: "radians" },
    ];

    const getOption = (unit: unitsChoice): ReactElement<HTMLElement> => {
        return (
            <option key={unit.id} value={unit.unit}>
                {unit.unit}
            </option>
        );
    };

    const handleTyping = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setInput(event.target.value);
    };

    const handleOption = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        setInUnits(event.target.value);
    };

    useEffect(() => {
        const handleConversion = (): void => {
            setAngleTurns(units2turns(parseFloat(input), inUnits));
        };
        handleConversion();
    }, [angleTurns, input, inUnits]);

    const getOutput = (unit: unitsChoice): ReactElement<HTMLElement> => {
        return (
            <p key={unit.id}>
                {" "}
                {turns2units(angleTurns, unit.unit).toFixed(2)} [{unit.unit}]
            </p>
        );
    };

    return (
        <div>
            <input name="" type="text" value={input} onChange={handleTyping} />
            <br /> <br />
            <form>
                &nbsp; &nbsp;
                <select value={inUnits} onChange={handleOption}>
                    {units.map((unit) => getOption(unit))}
                </select>
            </form>
            <h1>&#187;</h1>
            <div>{units.map((u) => getOutput(u))}</div>
        </div>
    );
};

export default AngleConverter;
