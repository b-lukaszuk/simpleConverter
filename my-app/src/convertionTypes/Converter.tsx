import React, { ReactElement, useEffect, useState } from "react";
import getOption from "../utils/getOption";
import "./Converter.css"

interface unitsChoice {
    id: number;
    unit: string;
}

interface Props {
    units: unitsChoice[],
    main2secondary: Function,
    secondary2main: Function,
    additionalInfo: string,
}

const Converter: React.FC<Props> = (props): ReactElement<HTMLElement> => {

    const units: unitsChoice[] = props.units;
    const main2secondary: Function = props.main2secondary;
    const secondary2main: Function = props.secondary2main;
    const additionalInfo: string = props.additionalInfo;

    const [input, setInput] = useState("0");
    const [inUnits, setInUnits] = useState(units[0].unit);
    const [howManyMainUnits, setHowManyMainUnits] = useState(0);

    const handleTyping = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setInput(event.target.value);
    };

    const handleOption = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        setInUnits(event.target.value);
    };

    useEffect(() => {
        const handleConversion = (): void => {
            setHowManyMainUnits(secondary2main(parseFloat(input), inUnits));
        };
        handleConversion();
    }, [howManyMainUnits, secondary2main, input, inUnits]);

    useEffect(() => {
        const setDefaults = (): void => {
            setInput("0");
            setHowManyMainUnits(0);
            setInUnits(units[0].unit);
        }
        setDefaults();
    }, [units])

    const getOutput = (unit: unitsChoice): ReactElement<HTMLElement> => {
        return (
            <p key={unit.id}>
                {" "}
                {main2secondary(howManyMainUnits, unit.unit).toFixed(4)} [{unit.unit}]
            </p>
        );
    };

    return (
        <div>
            <hr />
            <p>Type some number (allowed chars: digits, period, -, +)</p>
            <input
                pattern="[-+]{0,1}[0-9]+\.{0,1}[0-9]{0,}"
                placeholder="0.00"
                name="" type="text" value={input} onChange={handleTyping} />
            <p>(red border: incorrect input that may produce incorrect output)</p>
            <p>Choose input units:</p>
            <select value={inUnits} onChange={handleOption}>
                {units.map((unit) => getOption(unit))}
            </select>
            <p>{additionalInfo}</p>
            <h2>&#187;</h2>
            <div>{units.map((u) => getOutput(u))}</div>
        </div>
    );
};

export default Converter;
