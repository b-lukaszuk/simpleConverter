import { convertIfInRange } from "../../utils/convertIfInRange";

const METREMIN: number = 0;
const METREMAX: number = 1e15;

// mostly based on en.wikipedia + some google searches
function metre2cm(metre: number): number {
    return convertIfInRange(
        metre,
        (m: number): number => m * 1e2,
        METREMIN,
        METREMAX
    );
}

function metre2foot(metre: number): number {
    return convertIfInRange(
        metre,
        (m: number): number => m * 1e2 / 30.48,
        METREMIN,
        METREMAX
    );
}

function metre2inch(metre: number): number {
    return convertIfInRange(
        metre,
        (m: number): number => m * 1e2 / 2.54,
        METREMIN,
        METREMAX
    );
}

function metre2km(metre: number): number {
    return convertIfInRange(
        metre,
        (m: number): number => m / 1e3,
        METREMIN,
        METREMAX
    );
}

function metre2landMile(metre: number): number {
    return convertIfInRange(
        metre,
        (m: number): number => m / 1609.344,
        METREMIN,
        METREMAX
    );
}

function metre2league(metre: number): number {
    return convertIfInRange(
        metre,
        (m: number): number => m / 5556,
        METREMIN,
        METREMAX
    );
}

function metre2mm(metre: number): number {
    return convertIfInRange(
        metre,
        (m: number): number => m * 1e3,
        METREMIN,
        METREMAX
    );
}

function metre2seaMile(metre: number): number {
    return convertIfInRange(
        metre,
        (m: number): number => m / 1852,
        METREMIN,
        METREMAX
    );
}

function metre2yard(metre: number): number {
    return convertIfInRange(
        metre,
        (m: number): number => m / 0.9144,
        METREMIN,
        METREMAX
    );
}

export {
    METREMIN,
    METREMAX,
    metre2cm,
    metre2foot,
    metre2inch,
    metre2km,
    metre2landMile,
    metre2league,
    metre2mm,
    metre2seaMile,
    metre2yard,
};
