import { convertIfInRange } from "../../utils/convertIfInRange";
import { metPerSec2Mach, METPERSECMIN, METPERSECMAX } from "./meterPerSecond";

const MACHMIN: number = metPerSec2Mach(METPERSECMIN);
const MACHMAX: number = metPerSec2Mach(METPERSECMAX);

function mach2metPerSec(mach: number): number {
    return convertIfInRange(mach,
        (m: number): number => m * 340.29,
        MACHMIN, MACHMAX);
}

export { mach2metPerSec };
