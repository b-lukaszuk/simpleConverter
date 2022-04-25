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

export default groupBy3;
