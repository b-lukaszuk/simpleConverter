import { c2k } from "./celsius";
import { d2k } from "./delisle";
import { f2k } from "./fahrenheit";
import { k2c, k2f, k2ra, k2d, k2n, k2re, k2ro } from "./kelvin";
import { n2k } from "./newton";
import { ra2k } from "./rankine";
import { re2k } from "./reaumur";
import { ro2k } from "./romer";

function kelvin2units(howMany: number, units: string): number {
    switch (units) {
        case "celsius":
            return c2k(howMany);
        case "delisle":
            return d2k(howMany);
        case "fahrenheit":
            return f2k(howMany);
        case "newton":
            return n2k(howMany);
        case "rankine":
            return ra2k(howMany);
        case "reamur":
            return re2k(howMany);
        case "romer":
            return ro2k(howMany);
        case "kelvin":
            return howMany;
        default:
            return NaN;
    }
}

function units2kelvin(howMany: number, units: string): number {
    switch (units) {
        case "celsius":
            return k2c(howMany);
        case "delisle":
            return k2d(howMany);
        case "fahrenheit":
            return k2f(howMany);
        case "newton":
            return k2n(howMany);
        case "rankine":
            return k2ra(howMany);
        case "reamur":
            return k2re(howMany);
        case "romer":
            return k2ro(howMany);
        case "kelvin":
            return howMany;
        default:
            return NaN;
    }
}

export { kelvin2units, units2kelvin };
