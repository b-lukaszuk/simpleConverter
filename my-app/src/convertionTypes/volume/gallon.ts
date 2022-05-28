import { convertIfInRange } from "../../utils/convertIfInRange";
import {
    CUBMETREMIN,
    CUBMETREMAX,
    cubicMetreToUsGallon,
} from "./cubicMetre";

const USGALLONMIN: number = cubicMetreToUsGallon(CUBMETREMIN);
const USGALLONMAX: number = cubicMetreToUsGallon(CUBMETREMAX);

function usGallonToCubicMetre(gallonUS: number): number {
    return convertIfInRange(
        gallonUS,
        (g: number): number => g * 0.003785411784,
        USGALLONMIN,
        USGALLONMAX
    );
}

export { usGallonToCubicMetre };
