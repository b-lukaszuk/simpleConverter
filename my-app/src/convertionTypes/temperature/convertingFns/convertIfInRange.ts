import isOutOfRange from "./isOutOfRange";

function convertIfInRange(kelvin: number,
    converter: Function,
    minIncl: number,
    maxIncl: number): number {
    if (isOutOfRange(kelvin, minIncl, maxIncl)) {
        return NaN;
    } else {
        return converter(kelvin);
    }
}

export { convertIfInRange };
