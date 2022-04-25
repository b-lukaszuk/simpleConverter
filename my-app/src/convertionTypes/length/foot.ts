import { convertIfInRange } from "../../utils/convertIfInRange";
import { METREMIN, METREMAX, metre2foot } from "./metre";

const FOOTMIN: number = metre2foot(METREMIN);
const FOOTMAX: number = metre2foot(METREMAX);

function foot2metre(foot: number): number {
    return convertIfInRange(foot,
        (f: number): number => f * 30.48 / 1e2,
        FOOTMIN, FOOTMAX);
}

export { foot2metre };
