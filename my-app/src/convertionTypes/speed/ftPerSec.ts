import { convertIfInRange } from "../../utils/convertIfInRange";
import { metPerSec2ftPerSec, METPERSECMIN, METPERSECMAX } from "./meterPerSecond";

const FTPERSECMIN: number = metPerSec2ftPerSec(METPERSECMIN);
const FTPERSECMAX: number = metPerSec2ftPerSec(METPERSECMAX);

function ftPerSec2metPerSec(ftPerSec: number): number {
    return convertIfInRange(ftPerSec,
        (f: number): number => f / 3.2808399,
        FTPERSECMIN, FTPERSECMAX);
}

export { ftPerSec2metPerSec };
