import { convertIfInRange } from "../../utils/convertIfInRange";
import { CUBMETREMIN, CUBMETREMAX, cubicMetreToBarrel } from "./cubicMetre";

const BARRELMIN: number = cubicMetreToBarrel(CUBMETREMIN);
const BARRELMAX: number = cubicMetreToBarrel(CUBMETREMAX);

function barrelToCubicMetre(barrel: number): number {
    return convertIfInRange(barrel,
        (b: number): number => b * 0.158987294928,
        BARRELMIN, BARRELMAX);
}

export { barrelToCubicMetre };
