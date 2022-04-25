import { convertIfInRange } from "../../utils/convertIfInRange";
import { METREMIN, METREMAX, metre2yard } from "./metre";

const YARDMIN: number = metre2yard(METREMIN);
const YARDMAX: number = metre2yard(METREMAX);

function yard2metre(yard: number): number {
    return convertIfInRange(yard,
        (y: number): number => y * 0.9144,
        YARDMIN, YARDMAX);
}

export { yard2metre };
