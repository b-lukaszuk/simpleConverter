import { barrelToCubicMetre } from "./barrel";
import { cubicCentimetreToCubicMetre } from "./cubicCentimetre";
import { cubicFootToCubicMetre } from "./cubicFoot";
import { cubicInchToCubicMetre } from "./cubicInch";
import {
    cubicMetreToBarrel,
    cubicMetreToCubicCentimetre,
    cubicMetreToCubicFoot,
    cubicMetreToCubicInch,
    cubicMetreToUsGallon,
    cubicMetreToLitre,
    cubicMetreToUsPint,
} from "./cubicMetre";
import { litreToCubicMetre } from "./litre";
import { usGallonToCubicMetre } from "./gallon";
import { usPintToCubicMetre } from "./pint";

import ISelectChoice from "../../interfaces/ISelectChoice";

function cubicMeters2units(howMany: number, units: string): number {
    switch (units) {
        case "barrel":
            return cubicMetreToBarrel(howMany);
        case "cubic centimetre":
            return cubicMetreToCubicCentimetre(howMany);
        case "cubic foot":
            return cubicMetreToCubicFoot(howMany);
        case "cubic inch":
            return cubicMetreToCubicInch(howMany);
        case "gallon (US)":
            return cubicMetreToUsGallon(howMany);
        case "litre":
            return cubicMetreToLitre(howMany);
        case "pint (US)":
            return cubicMetreToUsPint(howMany);
        case "cubic metre":
            return howMany;
        default:
            return NaN;
    }
}

function units2cubicMetres(howMany: number, units: string): number {
    switch (units) {
        case "barrel":
            return barrelToCubicMetre(howMany);
        case "cubic centimetre":
            return cubicCentimetreToCubicMetre(howMany);
        case "cubic foot":
            return cubicFootToCubicMetre(howMany);
        case "cubic inch":
            return cubicInchToCubicMetre(howMany);
        case "gallon (US)":
            return usGallonToCubicMetre(howMany);
        case "litre":
            return litreToCubicMetre(howMany);
        case "pint (US)":
            return usPintToCubicMetre(howMany);
        case "cubic metre":
            return howMany;
        default:
            return NaN;
    }
}

const volumeUnits: ISelectChoice[] = [
    { id: 0, name: "barrel" },
    { id: 1, name: "cubic centimetre" },
    { id: 2, name: "cubic foot" },
    { id: 3, name: "cubic inch" },
    { id: 4, name: "litre" },
    { id: 5, name: "cubic metre" },
    { id: 6, name: "gallon (US)" },
    { id: 7, name: "pint (US)" },
];

const volumeInfo: string =
    "limit: 0-1e15 [cubic metre], SI and imperial/US units for fluids, [L] == [dm3], [mL] == [cm3]";

export { volumeInfo, volumeUnits, cubicMeters2units, units2cubicMetres };
