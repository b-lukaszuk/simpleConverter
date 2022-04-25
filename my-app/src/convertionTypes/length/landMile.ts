import { convertIfInRange } from "../../utils/convertIfInRange";
import { METREMIN, METREMAX, metre2landMile } from "./metre";

const LANDMILEMIN: number = metre2landMile(METREMIN);
const LANDMILEMAX: number = metre2landMile(METREMAX);

function landMile2metre(landMile: number): number {
    return convertIfInRange(landMile,
        (lm: number): number => lm * 1609.344,
        LANDMILEMIN, LANDMILEMAX);
}

export { landMile2metre };
