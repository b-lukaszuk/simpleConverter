import { c2k } from "./celsius";
import { d2k } from "./delisle";
import { f2k } from "./fahrenheit";
import { k2c, k2f, k2ra, k2d, k2n, k2re, k2ro } from "./kelvin";
import { n2k } from "./newton";
import { ra2k } from "./rankine";
import { re2k } from "./reaumur";
import { ro2k } from "./romer";

interface unitsChoice {
    id: number;
    unit: string;
}

function kelvin2units(howMany: number, units: string): number {
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
        case "reaumur":
            return k2re(howMany);
        case "romer":
            return k2ro(howMany);
        case "kelvin":
            return howMany;
        default:
            return NaN;
    }
}

function units2kelvin(howMany: number, units: string): number {
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
        case "reaumur":
            return re2k(howMany);
        case "romer":
            return ro2k(howMany);
        case "kelvin":
            return howMany;
        default:
            return NaN;
    }
}

const temperatureUnits: unitsChoice[] = [
    { id: 0, unit: "celsius" },
    { id: 1, unit: "delisle" },
    { id: 2, unit: "fahrenheit" },
    { id: 3, unit: "kelvin" },
    { id: 4, unit: "newton" },
    { id: 5, unit: "rankine" },
    { id: 6, unit: "reaumur" },
    { id: 7, unit: "romer" },
]

const temperatureInfo: string = "limit: 0-1e8 [kelvin]";

export { kelvin2units, units2kelvin, temperatureUnits, temperatureInfo };
