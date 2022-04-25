import { convertIfInRange } from "../../utils/convertIfInRange";
import { METREMIN, METREMAX, metre2mm } from "./metre";

const MMMIN: number = metre2mm(METREMIN);
const MMMAX: number = metre2mm(METREMAX);

function mm2metre(mm: number): number {
    return convertIfInRange(mm,
        (i: number): number => i / 1e3,
        MMMIN, MMMAX);
}

export { mm2metre };
