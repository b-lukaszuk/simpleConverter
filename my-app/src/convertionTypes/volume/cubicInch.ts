import { convertIfInRange } from "../../utils/convertIfInRange";
import {
    CUBMETREMIN,
    CUBMETREMAX,
    cubicMetreToCubicInch,
} from "./cubicMetre";

const CUBINCHMIN: number = cubicMetreToCubicInch(CUBMETREMIN);
const CUBINCHMAX: number = cubicMetreToCubicInch(CUBMETREMAX);

function cubicInchToCubicMetre(inch3: number): number {
    return convertIfInRange(
        inch3,
        (i3: number): number => i3 * 0.000016387064,
        CUBINCHMIN,
        CUBINCHMAX
    );
}

export { cubicInchToCubicMetre };
