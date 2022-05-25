import { convertIfInRange } from "../../utils/convertIfInRange";
import { METRESQMIN, METRESQMAX, metreSq2yardSq } from "./metreSq";

const YARDSQMIN: number = metreSq2yardSq(METRESQMIN);
const YARDSQMAX: number = metreSq2yardSq(METRESQMAX);

function yardSq2metreSq(yardSq: number): number {
    return convertIfInRange(yardSq,
        (ySq: number): number => ySq * 0.83612736,
        YARDSQMIN, YARDSQMAX);
}

export { yardSq2metreSq };
