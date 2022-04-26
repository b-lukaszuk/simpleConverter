import { convertIfInRange } from "../../utils/convertIfInRange";

const KGMIN: number = 0;
const KGMAX: number = 1e15;

// mostly based on en.wikipedia + some google searches
function kg2g(kg: number): number {
    return convertIfInRange(
        kg,
        (k: number): number => k * 1e3,
        KGMIN,
        KGMAX
    );
}

function kg2mg(kg: number): number {
    return convertIfInRange(
        kg,
        (k: number): number => k * 1e6,
        KGMIN,
        KGMAX
    );
}

function kg2ounce(kg: number): number {
    return convertIfInRange(
        kg,
        (k: number): number => k * 35.2739619,
        KGMIN,
        KGMAX
    );
}

function kg2pound(kg: number): number {
    return convertIfInRange(
        kg,
        (k: number): number => k * 0.45359237,
        KGMIN,
        KGMAX
    );
}

function kg2tonne(kg: number): number {
    return convertIfInRange(
        kg,
        (k: number): number => k / 1e3,
        KGMIN,
        KGMAX
    );
}

export { KGMIN, KGMAX, kg2g, kg2mg, kg2ounce, kg2pound, kg2tonne };
