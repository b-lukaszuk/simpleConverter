import isOutOfRange from "./isOutOfRange";

function convertIfInRange(someNum: number,
    converter: Function,
    minIncl: number,
    maxIncl: number): number {
    if (isOutOfRange(someNum, minIncl, maxIncl)) {
        return NaN;
    } else {
        return converter(someNum);
    }
}

export { convertIfInRange };
