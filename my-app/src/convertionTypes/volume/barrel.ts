import { convertIfInRange } from "../../utils/convertIfInRange";
import { CUBMETREMIN, CUBMETREMAX, cubicMetreToUsBarrel } from "./cubicMetre";

const BARRELMIN: number = cubicMetreToUsBarrel(CUBMETREMIN);
const BARRELMAX: number = cubicMetreToUsBarrel(CUBMETREMAX);

// us barrel
function usBarrelToCubicMetre(barrel: number): number {
    return convertIfInRange(barrel,
        (b: number): number => b * 0.158987294928,
        BARRELMIN, BARRELMAX);
}

export { usBarrelToCubicMetre };
