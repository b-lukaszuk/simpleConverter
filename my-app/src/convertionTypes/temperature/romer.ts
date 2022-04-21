import { convertIfInRange } from "../../utils/convertIfInRange";
import { KELVINMIN, KELVINMAX, k2c } from "./kelvin";

const ROMERMIN: number = k2c(KELVINMIN); // absolute zero
// max is: Plank-Temperature = Math.pow(10, 32) Kelvin
// here I will give somewhat less
const ROMERMAX: number = k2c(KELVINMAX);

function ro2k(romer: number): number {
    // to kelvin
    return convertIfInRange(romer,
        (ro: number): number => (ro - 7.5) * (40 / 21) + 273.15,
        ROMERMIN, ROMERMAX);
}

export { ro2k };
