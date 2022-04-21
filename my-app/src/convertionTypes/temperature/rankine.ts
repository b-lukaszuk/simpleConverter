import { convertIfInRange } from "../../utils/convertIfInRange";
import { KELVINMIN, KELVINMAX, k2ra } from "./kelvin";
const RANKINEMIN: number = k2ra(KELVINMIN); // absolute zero
// max is: Plank-Temperature = Math.pow(10, 32) Kelvin
// here I will give somewhat less
const RANKINEMAX: number = k2ra(KELVINMAX);

function ra2k(rankine: number): number {
    // to kelvin
    return convertIfInRange(rankine,
        (ra: number): number => ra * (5 / 9),
        RANKINEMIN, RANKINEMAX);
}

export { ra2k };
