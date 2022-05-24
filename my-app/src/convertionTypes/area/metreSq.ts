import { convertIfInRange } from "../../utils/convertIfInRange";

const METRESQMIN: number = 0;
const METRESQMAX: number = 1e15;

// mostly based on en.wikipedia + some google searches
function metreSq2acre(metreSq: number): number {
    return convertIfInRange(
        metreSq,
        (mSq: number): number => mSq * 0.000247105381,
        METRESQMIN,
        METRESQMAX
    );
}

function metreSq2are(metreSq: number): number {
    return convertIfInRange(
        metreSq,
        (mSq: number): number => mSq / 100,
        METRESQMIN,
        METRESQMAX
    );
}

function metreSq2cmSq(metreSq: number): number {
    return convertIfInRange(
        metreSq,
        (mSq: number): number => mSq * 1e4,
        METRESQMIN,
        METRESQMAX
    );
}

function metreSq2footSq(metreSq: number): number {
    return convertIfInRange(
        metreSq,
        (mSq: number): number => mSq * 10.76391042,
        METRESQMIN,
        METRESQMAX
    );
}

function metreSq2hectare(metreSq: number): number {
    return convertIfInRange(
        metreSq,
        (mSq: number): number => mSq / 10000,
        METRESQMIN,
        METRESQMAX
    );
}

function metreSq2inchSq(metreSq: number): number {
    return convertIfInRange(
        metreSq,
        (mSq: number): number => mSq * 1550.0031,
        METRESQMIN,
        METRESQMAX
    );
}

function metreSq2kmSq(metreSq: number): number {
    return convertIfInRange(
        metreSq,
        (mSq: number): number => mSq / 1e9,
        METRESQMIN,
        METRESQMAX
    );
}

function metreSq2landMileSq(metreSq: number): number {
    return convertIfInRange(
        metreSq,
        (mSq: number): number => mSq / 2589988.10,
        METRESQMIN,
        METRESQMAX
    );
}

function metreSq2seaMileSq(metreSq: number): number {
    return convertIfInRange(
        metreSq,
        (mSq: number): number => mSq / 3429904,
        METRESQMIN,
        METRESQMAX
    );
}

function metreSq2yardSq(metreSq: number): number {
    return convertIfInRange(
        metreSq,
        (mSq: number): number => mSq * 0.83612736,
        METRESQMIN,
        METRESQMAX
    );
}

export {
    METRESQMIN,
    METRESQMAX,
    metreSq2acre,
    metreSq2are,
    metreSq2cmSq,
    metreSq2footSq,
    metreSq2hectare,
    metreSq2inchSq,
    metreSq2kmSq,
    metreSq2landMileSq,
    metreSq2seaMileSq,
    metreSq2yardSq,
};
