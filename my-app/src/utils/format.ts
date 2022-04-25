// groups digits (in string) by 3 (or less if no equal division) from right
function groupBy3(text: string, sepChar: string = " "): string {
    let result: string[] = [];
    let moduloOfLen: number = text.length % 3;
    if (moduloOfLen !== 0) {
        result.push(text.slice(0, moduloOfLen));
    }
    for (let i = moduloOfLen; i < text.length; i += 3) {
        result.push(text.slice(i, i + 3));
    }
    return result.join(sepChar);
}

function formatNum(
    someNum: number,
    round: number = 3,
    sepChar: string = " "
): string {
    let results: string[] = someNum.toFixed(round).split(".");
    return groupBy3(results[0], sepChar) + "." + groupBy3(results[1], sepChar);
}

export default formatNum;
