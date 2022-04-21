import { convertIfInRange } from "../../utils/convertIfInRange";
import { KELVINMIN, KELVINMAX, k2c } from "./kelvin";

const NEWTONMIN: number = k2c(KELVINMIN); // absolute zero
// max is: Plank-Temperature = Math.pow(10, 32) Kelvin
// here I will give somewhat less
const NEWTONMAX: number = k2c(KELVINMAX);

function n2k(newton: number): number {
    // to kelvin
    return convertIfInRange(newton,
        (n: number): number => n * (100 / 33) + 273.15,
        NEWTONMIN, NEWTONMAX);
}

export { n2k };
