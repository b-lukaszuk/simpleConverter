import { convertIfInRange } from "../../utils/convertIfInRange";
import { PASCALMIN, PASCALMAX, pascal2bar } from "./pascal";

const BARMIN: number = pascal2bar(PASCALMIN);
const BARMAX: number = pascal2bar(PASCALMAX);

function bar2pascal(bar: number): number {
    return convertIfInRange(bar,
        (b: number): number => b * 1e5,
        BARMIN, BARMAX);
}

export { bar2pascal };
