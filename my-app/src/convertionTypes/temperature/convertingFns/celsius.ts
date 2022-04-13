import { KELVINMIN, KELVINMAX, k2c } from "./kelvin";
const CELSIUSMIN: number = k2c(KELVINMIN); // absolute zero
// max is: Plank-Temperature = Math.pow(10, 32) Kelvin
// here I will give somewhat less
const CELSIUSMAX: number = k2c(KELVINMAX);

function isOutOfRange(celsius: number): boolean {
    if (celsius < CELSIUSMIN || celsius > CELSIUSMAX) {
        return true;
    } else {
        return false;
    }
}

function c2k(celsius: number): number {
    // kelvin
    return isOutOfRange(celsius) ? NaN : (celsius + 273.15);
}

export { c2k };
