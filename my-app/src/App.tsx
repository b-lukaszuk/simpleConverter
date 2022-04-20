import React, { ReactElement, useState } from "react";
import "./App.css";
import Converter from "./convertionTypes/Converter";
import config from "./config/config";
import getOption from "./utils/getOption";

interface unitsChoice {
    id: number;
    unit: string;
}

const App: React.FC = (): ReactElement<HTMLElement> => {
    const getConvertionChoices = (config: Object): unitsChoice[] => {
        let result: unitsChoice[] = [];
        let keys: string[] = Object.keys(config);
        for (let i = 0; i < keys.length; i++) {
            result.push({ id: i, unit: keys[i] });
        }
        return result;
    };
    const convertions: unitsChoice[] = getConvertionChoices(config);
    const [convChoice, setConvChoice]: [string, Function] = useState(convertions[0].unit);

    const handleConvertionChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ): void => {
        setConvChoice(event.target.value);
    };

    return (
        <div className="App">
            <h1>Simple Converter</h1>
            <p className="warning">No guarantee of correct conversion</p>
            <p className="warning">Use it at your own risk</p>
            <p>(Although it should work fine)</p>
            <hr />
            <p>Select conversion type:</p>
            <select value={convChoice} onChange={handleConvertionChange}>
                {convertions.map((convertion) => getOption(convertion))}
            </select>
            <br /> <br />
            <Converter
                units={config[convChoice as keyof typeof config].units}
                main2secondary={config[convChoice as keyof typeof config].main2secondary}
                secondary2main={config[convChoice as keyof typeof config].secondary2main}
                additionalInfo={config[convChoice as keyof typeof config].additionalInfo}
            />
        </div>
    );
};

export default App;
