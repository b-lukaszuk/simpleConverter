// groups digits (in string) by 3 from right
function groupBy3(text: string, sepChar: string = " "): string {
    let result: string = "";
    let moduloOfLen: number = text.length % 3;
    let startId: number = 0;
    if (moduloOfLen === 1) {
        result = text.slice(0, moduloOfLen) + sepChar;
        startId = 1;
    } else if (moduloOfLen === 2) {
        result = text.slice(0, moduloOfLen) + sepChar;
        startId = 2;
    } else {
        for (let i = startId; i < text.length; i += 3) {
            result += text.slice(i, i + 3) + sepChar;
        }
    }
    return result.slice(0, -1);
}

export default groupBy3;
