import isOutOfRange from "./isOutOfRange";

const KELVINMIN: number = 0; // absolute zero
// max is: Plank-Temperature = Math.pow(10, 32) Kelvin
// here I will give somewhat less
const KELVINMAX: number = 1e8;

// https://en.wikipedia.org/wiki/Conversion_of_scales_of_temperature
function k2c(kelvin: number): number {
    // to celsius
    if (isOutOfRange(kelvin, KELVINMAX, KELVINMAX)) {
        return NaN;
    } else {
        return (kelvin - 273.15);
    }
}

function k2f(kelvin: number): number {
    // to fahrenheit
    if (isOutOfRange(kelvin, KELVINMAX, KELVINMAX)) {
        return NaN;
    } else {
        return kelvin * (9 / 5) - 459.67;
    }
}

function k2ra(kelvin: number): number {
    // to rankine
    if (isOutOfRange(kelvin, KELVINMAX, KELVINMAX)) {
        return NaN;
    } else {
        return (kelvin * (9 / 5));
    }
}

function k2d(kelvin: number): number {
    // to delisle
    if (isOutOfRange(kelvin, KELVINMAX, KELVINMAX)) {
        return NaN;
    } else {
        return ((373.15 - kelvin) * (3 / 2));
    }
}

function k2n(kelvin: number): number {
    // to newton
    if (isOutOfRange(kelvin, KELVINMAX, KELVINMAX)) {
        return NaN;
    } else {
        return ((kelvin - 273.15) * 33 / 100);
    }
}

function k2re(kelvin: number): number {
    // to reaumur
    if (isOutOfRange(kelvin, KELVINMAX, KELVINMAX)) {
        return NaN;
    } else {
        return ((kelvin - 273.15) * (4 / 5));
    }
}

function k2ro(kelvin: number): number {
    // to romer
    if (isOutOfRange(kelvin, KELVINMAX, KELVINMAX)) {
        return NaN;
    } else {
        return ((kelvin - 273.15) * (21 / 40) + 7.5);
    }
}

export { KELVINMIN, KELVINMAX, k2c, k2f, k2ra, k2d, k2n, k2re, k2ro };
