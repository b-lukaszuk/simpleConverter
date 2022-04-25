import { convertIfInRange } from "../../utils/convertIfInRange";
import { METREMIN, METREMAX, metre2seaMile } from "./metre";

const SEAMILEMIN: number = metre2seaMile(METREMIN);
const SEAMILEMAX: number = metre2seaMile(METREMAX);

function seaMile2metre(seaMile: number): number {
    return convertIfInRange(seaMile,
        (sm: number): number => sm * 1852,
        SEAMILEMIN, SEAMILEMAX);
}

export { seaMile2metre };
