import { KELVINMIN, KELVINMAX, k2f } from "./kelvin";
const FAHRENHEITMIN: number = k2f(KELVINMIN); // absolute zero
// max is: Plank-Temperature = Math.pow(10, 32) Kelvin
// here I will give somewhat less
const FAHRENHEITMAX: number = k2f(KELVINMAX);

function isOutOfRange(fahrenheit: number): boolean {
    if (fahrenheit < FAHRENHEITMIN || fahrenheit > FAHRENHEITMAX) {
        return true;
    } else {
        return false;
    }
}

function f2k(fahrenheit: number): number {
    // kelvin
    return isOutOfRange(fahrenheit) ? NaN : ((fahrenheit + 459.67) * (5 / 9));
}

export { f2k };
