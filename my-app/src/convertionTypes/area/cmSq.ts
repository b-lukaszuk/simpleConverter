import { convertIfInRange } from "../../utils/convertIfInRange";
import { METRESQMIN, METRESQMAX, metreSq2cmSq } from "./metreSq";

const CMSQMIN: number = metreSq2cmSq(METRESQMIN);
const CMSQMAX: number = metreSq2cmSq(METRESQMAX);

function cmSq2metreSq(cmSq: number): number {
    return convertIfInRange(cmSq,
        (cSq: number): number => cSq / 1e4,
        CMSQMIN, CMSQMAX);
}

export { cmSq2metreSq };
