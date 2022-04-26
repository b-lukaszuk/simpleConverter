import { convertIfInRange } from "../../utils/convertIfInRange";
import { KGMIN, KGMAX, kg2g } from "./kg";

const GMIN: number = kg2g(KGMIN);
const GMAX: number = kg2g(KGMAX);

function g2kg(gram: number): number {
    return convertIfInRange(gram,
        (g: number): number => g / 1e3,
        GMIN, GMAX);
}

export { g2kg };
