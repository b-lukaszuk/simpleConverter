import { convertIfInRange } from "../../utils/convertIfInRange";
import { METREMIN, METREMAX, metre2cm } from "./metre";

const CMMIN: number = metre2cm(METREMIN);
const CMMAX: number = metre2cm(METREMAX);

function cm2metre(cm: number): number {
    return convertIfInRange(cm,
        (c: number): number => c / 1e2,
        CMMIN, CMMAX);
}

export { cm2metre };
