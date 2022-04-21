import { convertIfInRange } from "../../utils/convertIfInRange";
import { KELVINMIN, KELVINMAX, k2c } from "./kelvin";

const REAUMURMIN: number = k2c(KELVINMIN); // absolute zero
// max is: Plank-Temperature = Math.pow(10, 32) Kelvin
// here I will give somewhat less
const REAUMURMAX: number = k2c(KELVINMAX);

function re2k(reaumur: number): number {
    // to kelvin
    return convertIfInRange(reaumur,
        (re: number): number => re * (5 / 4) + 273.15,
        REAUMURMIN, REAUMURMAX);
}

export { re2k };
