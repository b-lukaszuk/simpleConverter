const KELVINMIN: number = 0; // absolute zero
// max is: Plank-Temperature = Math.pow(10, 32) Kelvin
// here I will give somewhat less
const KELVINMAX: number = 1e8;

function isOutOfRange(kelvin: number): boolean {
    if (kelvin < KELVINMIN || kelvin > KELVINMAX) {
        return true;
    } else {
        return false;
    }
}
// https://en.wikipedia.org/wiki/Conversion_of_scales_of_temperature
function k2c(kelvin: number): number {
    // celsius
    return isOutOfRange(kelvin) ? NaN : (kelvin - 273.15);
}

function k2f(kelvin: number): number {
    // fahrenheit
    return isOutOfRange(kelvin) ? NaN : (kelvin * (9 / 5) - 459.67);
}

function k2ra(kelvin: number): number {
    // rankine
    return isOutOfRange(kelvin) ? NaN : (kelvin * (9 / 5));
}

function k2d(kelvin: number): number {
    // delisle
    return isOutOfRange(kelvin) ? NaN : ((373.15 - kelvin) * (3 / 2));
}

function k2n(kelvin: number): number {
    // newton
    return isOutOfRange(kelvin) ? NaN : ((kelvin - 273.15) * 33 / 100);
}

function k2re(kelvin: number): number {
    // reaumur
    return isOutOfRange(kelvin) ? NaN : ((kelvin - 273.15) * (4 / 5));
}

function k2ro(kelvin: number): number {
    // romer
    return isOutOfRange(kelvin) ? NaN : ((kelvin - 273.15) * (21 / 40) + 7.5);
}

export { KELVINMIN, KELVINMAX, k2c, k2f, k2ra, k2d, k2n, k2re, k2ro };
