import { convertIfInRange } from "../../utils/convertIfInRange";
import {
    CUBMETREMIN,
    CUBMETREMAX,
    cubicMetreToLitre,
} from "./cubicMetre";

const LITREMIN: number = cubicMetreToLitre(CUBMETREMIN);
const LITREMAX: number = cubicMetreToLitre(CUBMETREMAX);

function litreToCubicMetre(litre: number): number {
    return convertIfInRange(
        litre,
        (l: number): number => l / 1e3,
        LITREMIN,
        LITREMAX
    );
}

export { litreToCubicMetre };
