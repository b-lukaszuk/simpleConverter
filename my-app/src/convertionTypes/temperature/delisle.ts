import { convertIfInRange } from "../../utils/convertIfInRange";
import { KELVINMIN, KELVINMAX, k2c } from "./kelvin";

const DELISLEMIN: number = k2c(KELVINMIN); // absolute zero
// max is: Plank-Temperature = Math.pow(10, 32) Kelvin
// here I will give somewhat less
const DELISLEMAX: number = k2c(KELVINMAX);

function d2k(delisle: number): number {
    // to kelvin
    return convertIfInRange(delisle,
        (d: number): number => 373.15 - d * (2 / 3),
        DELISLEMIN, DELISLEMAX);
}

export { d2k };
