import { convertIfInRange } from "../../utils/convertIfInRange";
import {
    CUBMETREMIN,
    CUBMETREMAX,
    cubicMetreToCubicCentimetre,
} from "./cubicMetre";

const CUBCENTIMETREMIN: number = cubicMetreToCubicCentimetre(CUBMETREMIN);
const CUBCENTIMETREMAX: number = cubicMetreToCubicCentimetre(CUBMETREMAX);

function cubicCentimetreToCubicMetre(centimetre3: number): number {
    return convertIfInRange(
        centimetre3,
        (c3: number): number => c3 / 1e6,
        CUBCENTIMETREMIN,
        CUBCENTIMETREMAX
    );
}

export { cubicCentimetreToCubicMetre };
