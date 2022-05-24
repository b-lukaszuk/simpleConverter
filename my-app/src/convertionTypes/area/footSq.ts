import { convertIfInRange } from "../../utils/convertIfInRange";
import { METRESQMIN, METRESQMAX, metreSq2footSq } from "./metreSq";

const FOOTSQMIN: number = metreSq2footSq(METRESQMIN);
const FOOTSQMAX: number = metreSq2footSq(METRESQMAX);

function footSq2metreSq(footSq: number): number {
    return convertIfInRange(footSq,
        (ftSq: number): number => ftSq * 0.09290304,
        FOOTSQMIN, FOOTSQMAX);
}

export { footSq2metreSq };
