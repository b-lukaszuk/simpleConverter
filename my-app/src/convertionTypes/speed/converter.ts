import { ftPerSec2metPerSec } from "./ftPerSec";
import { kmPerHr2metPerSec } from "./kmPerHr";
import { knot2metPerSec } from "./knot";
import { mach2metPerSec } from "./mach";
import {
    metPerSec2Mach,
    metPerSec2ftPerSec,
    metPerSec2knot,
    metPerSec2kmPerHr,
    metPerSec2mph,
} from "./meterPerSecond";
import { mph2metPerSec } from "./mph";

import selectChoice from "../../interfaces/selectChoice";

function mPerSec2units(howMany: number, units: string): number {
    switch (units) {
        case "Ma":
            return metPerSec2Mach(howMany);
        case "ft/s":
            return metPerSec2ftPerSec(howMany);
        case "knot":
            return metPerSec2knot(howMany);
        case "km/h":
            return metPerSec2kmPerHr(howMany);
        case "mph":
            return metPerSec2mph(howMany);
        case "m/s":
            return howMany;
        default:
            return NaN;
    }
}

function units2mPerSec(howMany: number, units: string): number {
    switch (units) {
        case "Ma":
            return mach2metPerSec(howMany);
        case "ft/s":
            return ftPerSec2metPerSec(howMany);
        case "knot":
            return knot2metPerSec(howMany);
        case "km/h":
            return kmPerHr2metPerSec(howMany);
        case "mph":
            return mph2metPerSec(howMany);
        case "m/s":
            return howMany;
        default:
            return NaN;
    }
}

const speedUnits: selectChoice[] = [
    { id: 0, name: "Ma" },
    { id: 1, name: "ft/s" },
    { id: 2, name: "knot" },
    { id: 3, name: "m/s" },
    { id: 4, name: "km/h" },
    { id: 5, name: "mph" },
];

const speedInfo: string =
    "limit: 0-1e15 [m/s], Ma - Mach number - speed of object/speed of sound [1225 km/h]";

export { speedInfo, speedUnits, mPerSec2units, units2mPerSec };
