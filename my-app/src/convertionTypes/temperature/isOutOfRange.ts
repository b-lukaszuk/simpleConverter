function isOutOfRange(someNum: number,
    lowExcl: number, highExcl: number): boolean {
    if (someNum < lowExcl || someNum > highExcl) {
        return true;
    } else {
        return false;
    }
}

export default isOutOfRange;
