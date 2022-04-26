import { convertIfInRange } from "../../utils/convertIfInRange";
import { KGMIN, KGMAX, kg2ounce } from "./kg";

const OUNCEMIN: number = kg2ounce(KGMIN);
const OUNCEMAX: number = kg2ounce(KGMAX);

function ounce2kg(ounce: number): number {
    return convertIfInRange(ounce,
        (o: number): number => o / 35.2739619,
        OUNCEMIN, OUNCEMAX);
}

export { ounce2kg };
