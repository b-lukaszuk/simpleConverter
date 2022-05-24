import { acre2metreSq } from "./acre";
import { are2metreSq } from "./are";
import { cmSq2metreSq } from "./cmSq";
import { footSq2metreSq } from "./footSq";
import { hectare2metreSq } from "./hectare";
import { inchSq2metreSq } from "./inchSq";
import { kmSq2metreSq } from "./kmSq";
import { landMileSq2metreSq } from "./landMileSq";
import { metreSq2acre, metreSq2are, metreSq2cmSq, metreSq2footSq, metreSq2hectare, metreSq2inchSq, metreSq2kmSq, metreSq2landMileSq, metreSq2seaMileSq, metreSq2yardSq } from "./metreSq";
import { seaMileSq2metreSq } from "./seaMileSq";
import { yardSq2metreSq } from "./yardSq";

import ISelectChoice from "../../interfaces/ISelectChoice";

function metre2units(howMany: number, units: string): number {
    switch (units) {
        case "acre":
            return metreSq2acre(howMany);
        case "are":
            return metreSq2are(howMany);
        case "square cm":
            return metreSq2cmSq(howMany);
        case "square foot":
            return metreSq2footSq(howMany);
        case "hectare":
            return metreSq2hectare(howMany);
        case "square inch":
            return metreSq2inchSq(howMany);
        case "square km":
            return metreSq2kmSq(howMany);
        case "square land mile":
            return metreSq2landMileSq(howMany);
        case "square sea mile":
            return metreSq2seaMileSq(howMany);
        case "square yard":
            return metreSq2yardSq(howMany);
        case "metre":
            return howMany;
        default:
            return NaN;
    }
}

function units2metre(howMany: number, units: string): number {
    switch (units) {
        case "acre":
            return acre2metreSq(howMany);
        case "are":
            return are2metreSq(howMany);
        case "square cm":
            return cmSq2metreSq(howMany);
        case "square foot":
            return footSq2metreSq(howMany);
        case "hectare":
            return hectare2metreSq(howMany);
        case "square inch":
            return inchSq2metreSq(howMany);
        case "square km":
            return kmSq2metreSq(howMany);
        case "square land mile":
            return landMileSq2metreSq(howMany);
        case "square sea mile":
            return seaMileSq2metreSq(howMany);
        case "square yard":
            return yardSq2metreSq(howMany);
        case "metre":
            return howMany;
        default:
            return NaN;
    }
}

const lengthUnits: ISelectChoice[] = [
    { id: 0, name: "acre" },
    { id: 1, name: "are" },
    { id: 3, name: "hectare" },
    { id: 4, name: "metre" },
    { id: 5, name: "square cm" },
    { id: 6, name: "square foot" },
    { id: 7, name: "square inch" },
    { id: 8, name: "square km" },
    { id: 9, name: "square land mile" },
    { id: 10, name: "square sea mile" },
    { id: 11, name: "square yard" },
]

const areaInfo: string = "limit: 0-1e15 [square metre], SI and imperial/US units";

export { areaInfo, lengthUnits, metre2units, units2metre };
