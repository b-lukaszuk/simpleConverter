import { convertIfInRange } from "../../utils/convertIfInRange";
import { KGMIN, KGMAX, kg2mg } from "./kg";

const MGMIN: number = kg2mg(KGMIN);
const MGMAX: number = kg2mg(KGMAX);

function mg2kg(miligram: number): number {
    return convertIfInRange(miligram,
        (mg: number): number => mg / 1e6,
        MGMIN, MGMAX);
}

export { mg2kg };
