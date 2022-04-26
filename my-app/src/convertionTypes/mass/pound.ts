import { convertIfInRange } from "../../utils/convertIfInRange";
import { KGMIN, KGMAX, kg2pound } from "./kg";

const POUNDMIN: number = kg2pound(KGMIN);
const POUNDMAX: number = kg2pound(KGMAX);

function pound2kg(pound: number): number {
    return convertIfInRange(pound,
        (p: number): number => p * 0.45359237,
        POUNDMIN, POUNDMAX);
}

export { pound2kg };
