import { convertIfInRange } from "../../utils/convertIfInRange";
import { metPerSec2knot, METPERSECMIN, METPERSECMAX } from "./meterPerSecond";

const KNOTMIN: number = metPerSec2knot(METPERSECMIN);
const KNOTMAX: number = metPerSec2knot(METPERSECMAX);

function knot2metPerSec(knot: number): number {
    return convertIfInRange(knot,
        (k: number): number => k / 1.94384449,
        KNOTMIN, KNOTMAX);
}

export { knot2metPerSec };
