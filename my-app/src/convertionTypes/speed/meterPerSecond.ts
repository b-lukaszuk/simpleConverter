import { convertIfInRange } from "../../utils/convertIfInRange";

const METPERSECMIN: number = 0;
const METPERSECMAX: number = 1e15;

// convertions determined mostly based on info found on en.wikipedia.org
// somethimes i used google

function metPerSec2Mach(metPerSec: number): number {
    return convertIfInRange(metPerSec,
        (m: number): number => m / 340.29,
        METPERSECMIN, METPERSECMAX);
}

function metPerSec2ftPerSec(metPerSec: number): number {
    return convertIfInRange(metPerSec,
        (m: number): number => m * 3.2808399,
        METPERSECMIN, METPERSECMAX);
}

function metPerSec2knot(metPerSec: number): number {
    return convertIfInRange(metPerSec,
        (m: number): number => m * 1.94384449,
        METPERSECMIN, METPERSECMAX);
}

function metPerSec2kmPerHr(metPerSec: number): number {
    return convertIfInRange(metPerSec,
        (m: number): number => m * 3.6,
        METPERSECMIN, METPERSECMAX);
}

function metPerSec2mph(metPerSec: number): number {
    return convertIfInRange(metPerSec,
        (m: number): number => m * 2.23693629,
        METPERSECMIN, METPERSECMAX);
}

export { METPERSECMIN, METPERSECMAX, metPerSec2Mach, metPerSec2ftPerSec, metPerSec2knot, metPerSec2kmPerHr, metPerSec2mph };
