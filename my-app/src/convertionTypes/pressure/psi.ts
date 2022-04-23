import { convertIfInRange } from "../../utils/convertIfInRange";
import { PASCALMIN, PASCALMAX, pascal2psi } from "./pascal";

const PSIMIN: number = pascal2psi(PASCALMIN);
const PSIMAX: number = pascal2psi(PASCALMAX);

function psi2pascal(psi: number): number {
    return convertIfInRange(psi,
        (a: number): number => a * 6894.76,
        PSIMIN, PSIMAX);
}

export { psi2pascal };
