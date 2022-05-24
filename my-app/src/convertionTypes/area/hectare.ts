import { convertIfInRange } from "../../utils/convertIfInRange";
import { METRESQMIN, METRESQMAX, metreSq2hectare } from "./metreSq";

const HECTAREMIN: number = metreSq2hectare(METRESQMIN);
const HECTAREMAX: number = metreSq2hectare(METRESQMAX);

function hectare2metreSq(hectare: number): number {
    return convertIfInRange(hectare,
        (hct: number): number => hct * 10000,
        HECTAREMIN, HECTAREMAX);
}

export { hectare2metreSq };
