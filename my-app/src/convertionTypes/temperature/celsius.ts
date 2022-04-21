import { convertIfInRange } from "../../utils/convertIfInRange";
import { KELVINMIN, KELVINMAX, k2c } from "./kelvin";

const CELSIUSMIN: number = k2c(KELVINMIN); // absolute zero
// max is: Plank-Temperature = Math.pow(10, 32) Kelvin
// here I will give somewhat less
const CELSIUSMAX: number = k2c(KELVINMAX);

function c2k(celsius: number): number {
    // to kelvin
    return convertIfInRange(celsius,
        (c: number): number => c + 273.15,
        CELSIUSMIN, CELSIUSMAX);
}

export { c2k };
