import { convertIfInRange } from "../../utils/convertIfInRange";
import { KGMIN, KGMAX, kg2tonne } from "./kg";

const TONNEMIN: number = kg2tonne(KGMIN);
const TONNEMAX: number = kg2tonne(KGMAX);

function tonne2kg(tonne: number): number {
    return convertIfInRange(tonne,
        (t: number): number => t * 1e3,
        TONNEMIN, TONNEMAX);
}

export { tonne2kg };
