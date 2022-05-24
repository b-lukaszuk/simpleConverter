import { convertIfInRange } from "../../utils/convertIfInRange";
import { METRESQMIN, METRESQMAX, metreSq2are } from "./metreSq";

const AREMIN: number = metreSq2are(METRESQMIN);
const AREMAX: number = metreSq2are(METRESQMAX);

function are2metreSq(are: number): number {
    return convertIfInRange(are,
        (ar: number): number => ar * 100,
        AREMIN, AREMAX);
}

export { are2metreSq };
