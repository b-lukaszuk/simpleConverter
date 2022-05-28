import {
    turns2units,
    units2turns,
    angleUnits,
    angleInfo,
} from "../convertionTypes/angle/converter";

import {
    metreSq2units,
    units2metreSq,
    areaUnits,
    areaInfo,
} from "../convertionTypes/area/converter";

import {
    kg2units,
    units2kg,
    massInfo,
    massUnits,
} from "../convertionTypes/mass/converter";

import {
    metre2units,
    units2metre,
    lengthInfo,
    lengthUnits,
} from "../convertionTypes/length/converter";

import {
    pascal2units,
    units2pascal,
    pressureInfo,
    pressureUnits,
} from "../convertionTypes/pressure/converter";

import {
    mPerSec2units,
    units2mPerSec,
    speedUnits,
    speedInfo,
} from "../convertionTypes/speed/converter";

import {
    kelvin2units,
    units2kelvin,
    temperatureUnits,
    temperatureInfo,
} from "../convertionTypes/temperature/converter";

import {
    cubicMeters2units,
    units2cubicMetres,
    volumeUnits,
    volumeInfo,
} from "../convertionTypes/volume/converter";

const config = {
    angle: {
        units: angleUnits,
        main2secondary: turns2units,
        secondary2main: units2turns,
        additionalInfo: angleInfo,
    },
    area: {
        units: areaUnits,
        main2secondary: metreSq2units,
        secondary2main: units2metreSq,
        additionalInfo: areaInfo,
    },
    mass: {
        units: massUnits,
        main2secondary: kg2units,
        secondary2main: units2kg,
        additionalInfo: massInfo,
    },
    length: {
        units: lengthUnits,
        main2secondary: metre2units,
        secondary2main: units2metre,
        additionalInfo: lengthInfo,
    },
    pressure: {
        units: pressureUnits,
        main2secondary: pascal2units,
        secondary2main: units2pascal,
        additionalInfo: pressureInfo,
    },
    speed: {
        units: speedUnits,
        main2secondary: mPerSec2units,
        secondary2main: units2mPerSec,
        additionalInfo: speedInfo,
    },
    temperature: {
        units: temperatureUnits,
        main2secondary: kelvin2units,
        secondary2main: units2kelvin,
        additionalInfo: temperatureInfo,
    },
    volume: {
        units: volumeUnits,
        main2secondary: cubicMeters2units,
        secondary2main: units2cubicMetres,
        additionalInfo: volumeUnits,
    },
};

export default config;
