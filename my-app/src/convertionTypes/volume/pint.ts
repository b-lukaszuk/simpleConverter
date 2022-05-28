import { convertIfInRange } from "../../utils/convertIfInRange";
import {
    CUBMETREMIN,
    CUBMETREMAX,
    cubicMetreToUsPint,
} from "./cubicMetre";

const USPINTMIN: number = cubicMetreToUsPint(CUBMETREMIN);
const USPINTMAX: number = cubicMetreToUsPint(CUBMETREMAX);

function usPintToCubicMetre(pintUS: number): number {
    return convertIfInRange(
        pintUS,
        (p: number): number => p * 0.000473176473,
        USPINTMIN,
        USPINTMAX
    );
}

export { usPintToCubicMetre };
