import { convertIfInRange } from "../../utils/convertIfInRange";
import { METREMIN, METREMAX, metre2inch } from "./metre";

const INCHMIN: number = metre2inch(METREMIN);
const INCHMAX: number = metre2inch(METREMAX);

function inch2metre(inch: number): number {
    return convertIfInRange(inch,
        (i: number): number => i * 2.54 / 1e2,
        INCHMIN, INCHMAX);
}

export { inch2metre };
