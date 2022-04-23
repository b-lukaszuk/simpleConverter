import {
    turns2units,
    units2turns,
    angleUnits,
    angleInfo,
} from "../convertionTypes/angle/converter";

import {
    pascal2units,
    units2pascal,
    pressureInfo,
    pressureUnits,
} from "../convertionTypes/pressure/converter";

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
    pressure: {
        units: pressureUnits,
        main2secondary: pascal2units,
        secondary2main: units2pascal,
        additionalInfo: pressureInfo,
    },
    temperature: {
        units: temperatureUnits,
        main2secondary: kelvin2units,
        secondary2main: units2kelvin,
        additionalInfo: temperatureInfo,
    },
};

export default config;
