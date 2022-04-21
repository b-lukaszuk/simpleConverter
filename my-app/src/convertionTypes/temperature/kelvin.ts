import { convertIfInRange } from "../../utils/convertIfInRange";

const KELVINMIN: number = 0; // absolute zero
// max is: Plank-Temperature = Math.pow(10, 32) Kelvin
// here I will give somewhat less
const KELVINMAX: number = 1e8;

// https://en.wikipedia.org/wiki/Conversion_of_scales_of_temperature
function k2c(kelvin: number): number {
    // to celsius
    return convertIfInRange(kelvin,
        (k: number): number => k - 273.15,
        KELVINMIN, KELVINMAX);
}

function k2f(kelvin: number): number {
    // to fahrenheit
    return convertIfInRange(kelvin,
        (k: number): number => k * (9 / 5) - 459.67,
        KELVINMIN, KELVINMAX);
}

function k2ra(kelvin: number): number {
    // to rankine
    return convertIfInRange(kelvin,
        (k: number): number => k * (9 / 5),
        KELVINMIN, KELVINMAX);
}

function k2d(kelvin: number): number {
    // to delisle
    return convertIfInRange(kelvin,
        (k: number): number => (373.15 - k) * (3 / 2),
        KELVINMIN, KELVINMAX);
}

function k2n(kelvin: number): number {
    // to newton
    return convertIfInRange(kelvin,
        (k: number): number => (k - 273.15) * (33 / 100),
        KELVINMIN, KELVINMAX);
}

function k2re(kelvin: number): number {
    // to reaumur
    return convertIfInRange(kelvin,
        (k: number): number => (k - 273.15) * (4 / 5),
        KELVINMIN, KELVINMAX);
}

function k2ro(kelvin: number): number {
    // to romer
    return convertIfInRange(kelvin,
        (k: number): number => (k - 273.15) * (21 / 40) + 7.5,
        KELVINMIN, KELVINMAX);
}

export { KELVINMIN, KELVINMAX, k2c, k2f, k2ra, k2d, k2n, k2re, k2ro };
