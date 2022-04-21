import { convertIfInRange } from "../../utils/convertIfInRange";
import { KELVINMIN, KELVINMAX, k2f } from "./kelvin";
const FAHRENHEITMIN: number = k2f(KELVINMIN); // absolute zero
// max is: Plank-Temperature = Math.pow(10, 32) Kelvin
// here I will give somewhat less
const FAHRENHEITMAX: number = k2f(KELVINMAX);

function f2k(fahrenheit: number): number {
    // to kelvin
    return convertIfInRange(fahrenheit,
        (f: number): number => (f + 459.67) * (5 / 9),
        FAHRENHEITMIN, FAHRENHEITMAX);
}

export { f2k };
