import { convertIfInRange } from "../../utils/convertIfInRange";

const CUBMETREMIN: number = 0;
const CUBMETREMAX: number = 1e15;

// mostly based on en.wikipedia + some google searches

// fluid barrel
function cubicMetreToBarrel(metre3: number): number {
    return convertIfInRange(
        metre3,
        (m3: number): number => m3 / 0.158987294928,
        CUBMETREMIN,
        CUBMETREMAX
    );
}

function cubicMetreToCubicCentimetre(metre3: number): number {
    return convertIfInRange(
        metre3,
        (m3: number): number => m3 * 1e6,
        CUBMETREMIN,
        CUBMETREMAX
    );
}

function cubicMetreToCubicFoot(metre3: number): number {
    return convertIfInRange(
        metre3,
        (m3: number): number => m3 / 0.028316846592,
        CUBMETREMIN,
        CUBMETREMAX
    );
}

function cubicMetreToCubicInch(metre3: number): number {
    return convertIfInRange(
        metre3,
        (m3: number): number => m3 / 0.000016387064,
        CUBMETREMIN,
        CUBMETREMAX
    );
}

function cubicMetreToUsGallon(metre3: number): number {
    return convertIfInRange(
        metre3,
        (m3: number): number => m3 / 0.003785411784,
        CUBMETREMIN,
        CUBMETREMAX
    );
}

function cubicMetreToLitre(metre3: number): number {
    return convertIfInRange(
        metre3,
        (m3: number): number => m3 * 1e3,
        CUBMETREMIN,
        CUBMETREMAX
    );
}

function cubicMetreToUsPint(metre3: number): number {
    return convertIfInRange(
        metre3,
        (m3: number): number => m3 / 0.000473176473,
        CUBMETREMIN,
        CUBMETREMAX
    );
}

export {
    CUBMETREMIN,
    CUBMETREMAX,
    cubicMetreToBarrel,
    cubicMetreToCubicCentimetre,
    cubicMetreToCubicFoot,
    cubicMetreToCubicInch,
    cubicMetreToUsGallon,
    cubicMetreToLitre,
    cubicMetreToUsPint,
};
