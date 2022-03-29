function myRound(numToRound: number, digits: number): number {
    return parseFloat(numToRound.toFixed(digits));
}

export default myRound;
