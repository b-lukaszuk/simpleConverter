import { convertIfInRange } from "../../utils/convertIfInRange";
import { METRESQMIN, METRESQMAX, metreSq2landMileSq } from "./metreSq";

const LANDMILESQMIN: number = metreSq2landMileSq(METRESQMIN);
const LANDMILESQMAX: number = metreSq2landMileSq(METRESQMAX);

function landMileSq2metreSq(landMileSq: number): number {
    return convertIfInRange(landMileSq,
        (lmSq: number): number => lmSq * 2589988.10,
        LANDMILESQMIN, LANDMILESQMAX);
}

export { landMileSq2metreSq };
