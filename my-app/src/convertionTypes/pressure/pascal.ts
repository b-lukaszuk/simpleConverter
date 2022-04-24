import { convertIfInRange } from "../../utils/convertIfInRange";

const PASCALMIN: number = 0;
const PASCALMAX: number = 1e12;

// convertions determined mostly based on info found on en.wikipedia.org
// e.g. here -> https://en.wikipedia.org/wiki/Torr#Conversion_factors
// somethimes i used google

function pascal2atm(pascal: number): number {
    return convertIfInRange(pascal,
        (p: number): number => p * (9.86923267 / 1e6),
        PASCALMIN, PASCALMAX);
}

function pascal2bar(pascal: number): number {
    return convertIfInRange(pascal,
        (p: number): number => p / 1e5,
        PASCALMIN, PASCALMAX);
}

function pascal2psi(pascal: number): number {
    return convertIfInRange(pascal,
        (p: number): number => p * (1.45037738 / 1e4),
        PASCALMIN, PASCALMAX);
}

// torr (mm/hg)
function pascal2torr(pascal: number): number {
    return convertIfInRange(pascal,
        (p: number): number => p * (7.50061683 / 1e3),
        PASCALMIN, PASCALMAX);
}

export { PASCALMIN, PASCALMAX, pascal2atm, pascal2bar, pascal2psi, pascal2torr };
