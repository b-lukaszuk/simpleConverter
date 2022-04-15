import isOutOfRange from "./isOutOfRange";
import { KELVINMIN, KELVINMAX, k2c } from "./kelvin";

const CELSIUSMIN: number = k2c(KELVINMIN); // absolute zero
// max is: Plank-Temperature = Math.pow(10, 32) Kelvin
// here I will give somewhat less
const CELSIUSMAX: number = k2c(KELVINMAX);

function c2k(celsius: number): number {
    // to kelvin
    if (isOutOfRange(celsius, CELSIUSMIN, CELSIUSMAX)) {
        return NaN;
    } else {
        return (celsius + 273.15);
    }
}

export { c2k };
