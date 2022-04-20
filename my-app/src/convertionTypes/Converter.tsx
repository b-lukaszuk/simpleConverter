import React, { ReactElement, useEffect, useState } from "react";
import getOption from "../utils/getOption";

interface unitsChoice {
    id: number;
    unit: string;
}

interface Props {
    units: unitsChoice[],
    main2secondary: Function,
    secondary2main: Function,
}

const Converter: React.FC<Props> = (props): ReactElement<HTMLElement> => {

    const units: unitsChoice[] = props.units;
    const main2secondary: Function = props.main2secondary;
    const secondary2main: Function = props.secondary2main;

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

    const getOutput = (unit: unitsChoice): ReactElement<HTMLElement> => {
        return (
            <p key={unit.id}>
                {" "}
                {main2secondary(howManyMainUnits, unit.unit).toFixed(2)} [{unit.unit}]
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

export default Converter;
