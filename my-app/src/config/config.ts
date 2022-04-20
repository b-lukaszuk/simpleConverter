import {
    turns2units,
    units2turns,
    angleUnits,
} from "../convertionTypes/angle/convertingFns/converter";
import {
    kelvin2units,
    units2kelvin,
    temperatureUnits,
} from "../convertionTypes/temperature/convertingFns/converter";

const config = {
    angle: {
        units: angleUnits,
        main2secondary: turns2units,
        secondary2main: units2turns,
    },
    temperature: {
        units: temperatureUnits,
        main2secondary: kelvin2units,
        secondary2main: units2kelvin,
    },
};

export default config;
