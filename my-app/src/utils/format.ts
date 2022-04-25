// groups digits (in string) by 3 (or less if no equal division) from right
function groupByNChars(
    text: string,
    nChar: number = 3,
    sepChar: string = " "
): string {
    let result: string[] = [];
    let moduloOfLen: number = text.length % nChar;
    if (moduloOfLen !== 0) {
        result.push(text.slice(0, moduloOfLen));
    }
    for (let i = moduloOfLen; i < text.length; i += nChar) {
        result.push(text.slice(i, i + nChar));
    }
    return result.join(sepChar);
}

function formatNum(
    someNum: number,
    round: number = 3,
    sepChar: string = " "
): string {
    if (isNaN(someNum)) {
        return "NaN";
    }
    let results: string[] = someNum.toFixed(round).split(".");
    return (
        groupByNChars(results[0], 3, sepChar) +
        "." +
        groupByNChars(results[1], 3, sepChar)
    );
}

export default formatNum;
