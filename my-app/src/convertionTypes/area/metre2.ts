import { convertIfInRange } from "../../utils/convertIfInRange";

const METRESQ2MIN: number = 0;
const METRESQMAX: number = 1e15;

// mostly based on en.wikipedia + some google searches
function metreSq2are(metreSq: number): number {
    return convertIfInRange(
        metreSq,
        (mSq: number): number => mSq / 100,
        METRESQ2MIN,
        METRESQMAX
    );
}

function metreSq2cmSq(metreSq: number): number {
    return convertIfInRange(
        metreSq,
        (mSq: number): number => mSq * 1e4,
        METRESQ2MIN,
        METRESQMAX
    );
}

function metreSq2footSq(metreSq: number): number {
    return convertIfInRange(
        metreSq,
        (mSq: number): number => mSq * 10.76391042,
        METRESQ2MIN,
        METRESQMAX
    );
}

function metreSq2hectare(metreSq: number): number {
    return convertIfInRange(
        metreSq,
        (mSq: number): number => mSq / 10000,
        METRESQ2MIN,
        METRESQMAX
    );
}

function metreSq2inchSq(metreSq: number): number {
    return convertIfInRange(
        metreSq,
        (mSq: number): number => mSq * 1550.0031,
        METRESQ2MIN,
        METRESQMAX
    );
}

function metreSq2kmSq(metreSq: number): number {
    return convertIfInRange(
        metreSq,
        (mSq: number): number => mSq / 1e9,
        METRESQ2MIN,
        METRESQMAX
    );
}

function metreSq2landMileSq(metreSq: number): number {
    return convertIfInRange(
        metreSq,
        (mSq: number): number => mSq / 2589988.10,
        METRESQ2MIN,
        METRESQMAX
    );
}

function metreSq2seaMileSq(metreSq: number): number {
    return convertIfInRange(
        metreSq,
        (mSq: number): number => mSq / 3429904,
        METRESQ2MIN,
        METRESQMAX
    );
}

function metreSq2yardSq(metreSq: number): number {
    return convertIfInRange(
        metreSq,
        (mSq: number): number => mSq * 0.83612736,
        METRESQ2MIN,
        METRESQMAX
    );
}

export {
    METRESQ2MIN,
    METRESQMAX,
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
