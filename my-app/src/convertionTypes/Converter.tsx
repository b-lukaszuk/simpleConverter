import React, { ReactElement, useEffect, useState } from "react";

import getOption from "../utils/getOption";
import formatNum from "../utils/format";
import InputElt from "./uiComponents/InputElt";
import selectChoice from "../interfaces/selectChoice";

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

    const [inputDigits, setInputDigits] = useState("0");
    const [inUnits, setInUnits] = useState(units[0].name);
    const [howManyMainUnits, setHowManyMainUnits] = useState(0);

    const handleTypingDigits = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setInputDigits(event.target.value);
    };

    const [inputThousandsSep, setInputThousandsSep] = useState(",");
    const handleTypingThousandsSep = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setInputThousandsSep(event.target.value);
    };

    const [inputDecimalSep, setInputDecimalSep] = useState(".");
    const handleTypingDecimalSep = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setInputDecimalSep(event.target.value);
    };

    const handleOption = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        setInUnits(event.target.value);
    };

    useEffect(() => {
        const handleConversion = (): void => {
            setHowManyMainUnits(secondary2main(parseFloat(inputDigits), inUnits));
        };
        handleConversion();
    }, [
        howManyMainUnits,
        secondary2main,
        inputDigits,
        inUnits,
        inputThousandsSep,
        inputDecimalSep,
    ]);

    useEffect(() => {
        const setDefaults = (): void => {
            setInputDigits("0");
            setHowManyMainUnits(0);
            setInUnits(units[0].name);
        };
        setDefaults();
    }, [units]);

    const getOutput = (unit: selectChoice): ReactElement<HTMLElement> => {
        return (
            <p key={unit.id}>
                {" "}
                {formatNum(
                    main2secondary(howManyMainUnits, unit.name),
                    inputThousandsSep,
                    inputDecimalSep
                )}{" "}
                [{unit.name}]
            </p>
        );
    };

    return (
        <div>
            <hr />
            <InputElt id="digitsInput"
                label="Type some number (allowed chars: digits, period, -, +)"
                labelBr={true}
                pattern="[-+]{0,1}[0-9]+\.{0,1}[0-9]{0,}"
                placeholder="0.00" length={15} size={15}
                value={inputDigits} changeHandler={handleTypingDigits} />
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
            <InputElt id="thousandsSep"
                label="Thousands separator" length={1} size={1}
                value={inputThousandsSep}
                changeHandler={handleTypingThousandsSep} />
            <InputElt id="decimalSep"
                label="Decimal separator" length={1} size={1}
                value={inputDecimalSep}
                changeHandler={handleTypingDecimalSep} />
            <h2>&#187;</h2>
            <div>{units.map((u) => getOutput(u))}</div>
        </div>
    );
};

export default Converter;
