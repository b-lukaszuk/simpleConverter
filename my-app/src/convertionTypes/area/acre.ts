import { convertIfInRange } from "../../utils/convertIfInRange";
import { METRESQMIN, METRESQMAX, metreSq2acre } from "./metreSq";

const ACREMIN: number = metreSq2acre(METRESQMIN);
const ACREMAX: number = metreSq2acre(METRESQMAX);

function acre2metreSq(acre: number): number {
    return convertIfInRange(acre,
        (acr: number): number => acr / 0.000247105381,
        ACREMIN, ACREMAX);
}

export { acre2metreSq };
