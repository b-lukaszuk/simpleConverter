import { convertIfInRange } from "../../utils/convertIfInRange";
import { metPerSec2kmPerHr, METPERSECMIN, METPERSECMAX } from "./meterPerSecond";

const KMPERHRMIN: number = metPerSec2kmPerHr(METPERSECMIN);
const KMPERHRMAX: number = metPerSec2kmPerHr(METPERSECMAX);

function kmPerHr2metPerSec(kmPerHr: number): number {
    return convertIfInRange(kmPerHr,
        (m: number): number => m / 3.6,
        KMPERHRMIN, KMPERHRMAX);
}

export { kmPerHr2metPerSec };
