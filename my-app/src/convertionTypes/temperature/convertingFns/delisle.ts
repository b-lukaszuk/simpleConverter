import isOutOfRange from "./isOutOfRange";
import { KELVINMIN, KELVINMAX, k2c } from "./kelvin";

const DELISLEMIN: number = k2c(KELVINMIN); // absolute zero
// max is: Plank-Temperature = Math.pow(10, 32) Kelvin
// here I will give somewhat less
const DELISLEMAX: number = k2c(KELVINMAX);

function d2k(delisle: number): number {
    // to kelvin
    if (isOutOfRange(delisle, DELISLEMIN, DELISLEMAX)) {
        return NaN;
    } else {
        return 373.15 - delisle * (2 / 3);
    }
}

export { d2k };
