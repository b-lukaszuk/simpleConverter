import { cm2metre } from "./cm";
import { foot2metre } from "./foot"
import { inch2metre } from "./inch";
import { km2metre } from "./km";
import { landMile2metre } from "./landMile";
import { league2metre } from "./league";
import { metre2cm, metre2foot, metre2inch, metre2km, metre2landMile, metre2league, metre2mm, metre2seeMile, metre2yard } from "./metre";
import { mm2metre } from "./mm";
import { seeMile2metre } from "./seeMile";
import { yard2metre } from "./yard";

import selectChoice from "../../interfaces/selectChoice";

function metre2units(howMany: number, units: string): number {
    switch (units) {
        case "cm":
            return metre2cm(howMany);
        case "foot":
            return metre2foot(howMany);
        case "inch":
            return metre2inch(howMany);
        case "km":
            return metre2km(howMany);
        case "land mile":
            return metre2landMile(howMany);
        case "league":
            return metre2league(howMany);
        case "mm":
            return metre2mm(howMany);
        case "see mile":
            return metre2seeMile(howMany);
        case "yard":
            return metre2yard(howMany);
        case "metre":
            return howMany;
        default:
            return NaN;
    }
}

function units2metre(howMany: number, units: string): number {
    switch (units) {
        case "cm":
            return cm2metre(howMany);
        case "foot":
            return foot2metre(howMany);
        case "inch":
            return inch2metre(howMany);
        case "km":
            return km2metre(howMany);
        case "land mile":
            return landMile2metre(howMany);
        case "league":
            return league2metre(howMany);
        case "mm":
            return mm2metre(howMany);
        case "see mile":
            return seeMile2metre(howMany);
        case "yard":
            return yard2metre(howMany);
        case "metre":
            return howMany;
        default:
            return NaN;
    }
}

const temperatureUnits: selectChoice[] = [
    { id: 0, name: "cm" },
    { id: 1, name: "foot" },
    { id: 2, name: "inch" },
    { id: 3, name: "km" },
    { id: 4, name: "land mile" },
    { id: 5, name: "league" },
    { id: 6, name: "metre" },
    { id: 7, name: "mm" },
    { id: 8, name: "see mile" },
    { id: 9, name: "yard" },
]

const lengthInfo: string = "limit: 0-1e15 [metre], SI and imperial/US units";

export { lengthInfo };
