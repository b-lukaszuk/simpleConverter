import { convertIfInRange } from "../../utils/convertIfInRange";
import { METREMIN, METREMAX, metre2km } from "./metre";

const KMMIN: number = metre2km(METREMIN);
const KMMAX: number = metre2km(METREMAX);

function km2metre(km: number): number {
    return convertIfInRange(km,
        (km: number): number => km * 1e3,
        KMMIN, KMMAX);
}

export { km2metre };
