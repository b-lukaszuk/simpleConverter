import { atm2pascal } from "./atm";
import { bar2pascal } from "./bar";
import { pascal2atm, pascal2bar, pascal2psi, pascal2torr } from "./pascal";
import { psi2pascal } from "./psi";
import { torr2pascal } from "./torr";

import selectChoice from "../../interfaces/selectChoice";

function pascal2units(howMany: number, units: string): number {
    switch (units) {
        case "atm":
            return pascal2atm(howMany);
        case "bar":
            return pascal2bar(howMany);
        case "psi":
            return pascal2psi(howMany);
        case "torr":
            return pascal2torr(howMany);
        case "pascal":
            return howMany;
        default:
            return NaN;
    }
}

function units2pascal(howMany: number, units: string): number {
    switch (units) {
        case "atm":
            return atm2pascal(howMany);
        case "bar":
            return bar2pascal(howMany);
        case "psi":
            return psi2pascal(howMany);
        case "torr":
            return torr2pascal(howMany);
        case "pascal":
            return howMany;
        default:
            return NaN;
    }
}

const pressureInfo: string = "limit: 0-1e12 [pascal], [torr] == [mmHg]";

const pressureUnits: selectChoice[] = [
    { id: 0, name: "atm" },
    { id: 1, name: "bar" },
    { id: 2, name: "pascal" },
    { id: 3, name: "psi" },
    { id: 4, name: "torr" },
];

export { pascal2units, units2pascal, pressureInfo, pressureUnits };
