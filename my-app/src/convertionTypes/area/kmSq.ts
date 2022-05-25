import { convertIfInRange } from "../../utils/convertIfInRange";
import { METRESQMIN, METRESQMAX, metreSq2kmSq } from "./metreSq";

const KMSQMIN: number = metreSq2kmSq(METRESQMIN);
const KMSQMAX: number = metreSq2kmSq(METRESQMAX);

function kmSq2metreSq(kmSq: number): number {
    return convertIfInRange(kmSq,
        (kSq: number): number => kSq * 1e6,
        KMSQMIN, KMSQMAX);
}

export { kmSq2metreSq };
