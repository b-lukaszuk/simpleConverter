import { convertIfInRange } from "../../utils/convertIfInRange";
import { PASCALMIN, PASCALMAX, pascal2torr } from "./pascal";

const TORRMIN: number = pascal2torr(PASCALMIN);
const TORRMAX: number = pascal2torr(PASCALMAX);

function torr2pascal(torr: number): number {
    return convertIfInRange(torr,
        (a: number): number => a * 133,
        TORRMIN, TORRMAX);
}

export { torr2pascal };
