import { convertIfInRange } from "../../utils/convertIfInRange";
import { METRESQMIN, METRESQMAX, metreSq2inchSq } from "./metreSq";

const INCHSQMIN: number = metreSq2inchSq(METRESQMIN);
const INCHSQMAX: number = metreSq2inchSq(METRESQMAX);

function inchSq2metreSq(inchSq: number): number {
    return convertIfInRange(inchSq,
        (iSq: number): number => iSq / 1550.0031,
        INCHSQMIN, INCHSQMAX);
}

export { inchSq2metreSq };
