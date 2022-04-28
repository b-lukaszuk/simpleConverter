import React, { ReactElement, useEffect, useState } from "react";

import getOption from "../utils/getOption";
import formatNum from "../utils/format";
import selectChoice from "../interfaces/selectChoice";

import "./Converter.css";

interface Props {
    units: selectChoice[];
    main2secondary: Function;
    secondary2main: Function;
    additionalInfo: string;
}

const Converter: React.FC<Props> = (props): ReactElement<HTMLElement> => {
    const units: selectChoice[] = props.units;
    const main2secondary: Function = props.main2secondary;
    const secondary2main: Function = props.secondary2main;
    const additionalInfo: string = props.additionalInfo;

    const [input, setInput] = useState("0");
    const [inUnits, setInUnits] = useState(units[0].name);
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
            setInUnits(units[0].name);
        };
        setDefaults();
    }, [units]);

    const getOutput = (unit: selectChoice): ReactElement<HTMLElement> => {
        return (
            <p key={unit.id}>
                {" "}
                {formatNum(main2secondary(howManyMainUnits, unit.name))} [{unit.name}]
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
                maxLength={15}
                name=""
                type="text"
                value={input}
                onChange={handleTyping}
            />
            <p>
                (red border: incorrect input - may produce incorrect output/'NaN')
                <br />
                (exceeding conversion limit - may produce incorrect output/'NaN')
            </p>
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
