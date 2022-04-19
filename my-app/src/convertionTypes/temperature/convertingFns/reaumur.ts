import isOutOfRange from "./isOutOfRange";
import { KELVINMIN, KELVINMAX, k2c } from "./kelvin";

const REAUMURMIN: number = k2c(KELVINMIN); // absolute zero
// max is: Plank-Temperature = Math.pow(10, 32) Kelvin
// here I will give somewhat less
const REAUMURMAX: number = k2c(KELVINMAX);

function re2k(reaumur: number): number {
    // to kelvin
    if (isOutOfRange(reaumur, REAUMURMIN, REAUMURMAX)) {
        return NaN;
    } else {
        return reaumur * (5 / 4) + 273.15;
    }
}

export { re2k };
