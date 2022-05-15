import { c2k } from "./celsius";
import { d2k } from "./delisle";
import { f2k } from "./fahrenheit";
import { k2c, k2f, k2ra, k2d, k2n, k2re, k2ro } from "./kelvin";
import { n2k } from "./newton";
import { ra2k } from "./rankine";
import { re2k } from "./reaumur";
import { ro2k } from "./romer";
import ISelectChoice from "../../interfaces/ISelectChoice";

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
        case "réaumur":
            return k2re(howMany);
        case "rømer":
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
        case "réaumur":
            return re2k(howMany);
        case "rømer":
            return ro2k(howMany);
        case "kelvin":
            return howMany;
        default:
            return NaN;
    }
}

const temperatureUnits: ISelectChoice[] = [
    { id: 0, name: "celsius" },
    { id: 1, name: "delisle" },
    { id: 2, name: "fahrenheit" },
    { id: 3, name: "kelvin" },
    { id: 4, name: "newton" },
    { id: 5, name: "rankine" },
    { id: 6, name: "réaumur" },
    { id: 7, name: "rømer" },
]

const temperatureInfo: string = "limit: 0-1e8 [kelvin], limit in Physics: 0-Math.pow(10,32) [kelvin]";

export { kelvin2units, units2kelvin, temperatureUnits, temperatureInfo };
