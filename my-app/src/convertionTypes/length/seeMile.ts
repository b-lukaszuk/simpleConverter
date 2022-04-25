import { convertIfInRange } from "../../utils/convertIfInRange";
import { METREMIN, METREMAX, metre2seeMile } from "./metre";

const SEEMILEMIN: number = metre2seeMile(METREMIN);
const SEEMILEMAX: number = metre2seeMile(METREMAX);

function seeMile2metre(seeMile: number): number {
    return convertIfInRange(seeMile,
        (sm: number): number => sm * 1852,
        SEEMILEMIN, SEEMILEMAX);
}

export { seeMile2metre };
