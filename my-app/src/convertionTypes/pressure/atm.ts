import { convertIfInRange } from "../../utils/convertIfInRange";
import { PASCALMIN, PASCALMAX, pascal2atm } from "./pascal";

const ATMMIN: number = pascal2atm(PASCALMIN);
const ATMMAX: number = pascal2atm(PASCALMAX);

function atm2pascal(atm: number): number {
    return convertIfInRange(atm,
        (a: number): number => a * 101325,
        ATMMIN, ATMMAX);
}

export { atm2pascal };
