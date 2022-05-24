import React, { ReactElement, useEffect, useState } from "react";

import Converter from "./convertionTypes/Converter";
import config from "./config/config";
import getOption from "./utils/getOption";
import ISelectChoice from "./interfaces/ISelectChoice";

import "./App.css";

const App: React.FC = (): ReactElement<HTMLElement> => {
    const getConvertionChoices = (config: Object): ISelectChoice[] => {
        let result: ISelectChoice[] = [];
        let keys: string[] = Object.keys(config);
        for (let i = 0; i < keys.length; i++) {
            result.push({ id: i, name: keys[i] });
        }
        return result;
    };
    const convertions: ISelectChoice[] = getConvertionChoices(config);
    const [convChoice, setConvChoice]: [string, Function] = useState(
        convertions[0].name
    );

    const handleConvertionChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ): void => {
        setConvChoice(event.target.value);
    };

    useEffect(() => {
        setConvChoice("angle");
    }, [])

    return (
        <div className="App">
            <h1>Simple Converter</h1>
            <p className="warning">NO GUARANTEE OF CORRECT CONVERSION. USE IT AT YOUR OWN RISK</p>
            <p>(Still, I hope it will work fine. Some rounding errors are possible)</p>
            <hr />
            <p>Select conversion type:</p>
            <select value={convChoice} onChange={handleConvertionChange}>
                {convertions.map((convertion) => getOption(convertion))}
            </select>
            <br /> <br />
            <Converter
                units={config[convChoice as keyof typeof config].units}
                main2secondary={
                    config[convChoice as keyof typeof config].main2secondary
                }
                secondary2main={
                    config[convChoice as keyof typeof config].secondary2main
                }
                additionalInfo={
                    config[convChoice as keyof typeof config].additionalInfo
                }
            />
        </div>
    );
};

export default App;
