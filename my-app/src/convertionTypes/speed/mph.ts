import { convertIfInRange } from "../../utils/convertIfInRange";
import { metPerSec2mph, METPERSECMIN, METPERSECMAX } from "./meterPerSecond";

const MPHMIN: number = metPerSec2mph(METPERSECMIN);
const MPHMAX: number = metPerSec2mph(METPERSECMAX);

function mph2metPerSec(mph: number): number {
    return convertIfInRange(mph,
        (m: number): number => m / 2.23693629,
        MPHMIN, MPHMAX);
}

export { mph2metPerSec };
