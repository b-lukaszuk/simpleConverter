import { convertIfInRange } from "../../utils/convertIfInRange";
import { METRESQMIN, METRESQMAX, metreSq2seaMileSq } from "./metreSq";

const SEAMILESQMIN: number = metreSq2seaMileSq(METRESQMIN);
const SEAMILESQMAX: number = metreSq2seaMileSq(METRESQMAX);

function seaMileSq2metreSq(seaMileSq: number): number {
    return convertIfInRange(seaMileSq,
        (smSq: number): number => smSq * 3429904,
        SEAMILESQMIN, SEAMILESQMAX);
}

export { seaMileSq2metreSq };
