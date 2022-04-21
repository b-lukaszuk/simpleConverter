import {
    turns2units,
    units2turns,
    angleUnits,
    angleInfo,
} from "../convertionTypes/angle/converter";
import {
    kelvin2units,
    units2kelvin,
    temperatureUnits,
    temperatureInfo,
} from "../convertionTypes/temperature/converter";

const config = {
    angle: {
        units: angleUnits,
        main2secondary: turns2units,
        secondary2main: units2turns,
        additionalInfo: angleInfo,
    },
    temperature: {
        units: temperatureUnits,
        main2secondary: kelvin2units,
        secondary2main: units2kelvin,
        additionalInfo: temperatureInfo,
    },
};

export default config;
