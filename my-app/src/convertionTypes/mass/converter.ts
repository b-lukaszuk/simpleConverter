import { g2kg } from "./g";
import { kg2g, kg2mg, kg2ounce, kg2pound, kg2tonne } from "./kg";
import { mg2kg } from "./mg";
import { ounce2kg } from "./ounce";
import { pound2kg } from "./pound";
import { tonne2kg } from "./tonne";

import selectChoice from "../../interfaces/selectChoice";

function kg2units(howMany: number, units: string): number {
    switch (units) {
        case "g":
            return kg2g(howMany);
        case "mg":
            return kg2mg(howMany);
        case "ounce":
            return kg2ounce(howMany);
        case "pound":
            return kg2pound(howMany);
        case "tonne":
            return kg2tonne(howMany);
        case "kg":
            return howMany;
        default:
            return NaN;
    }
}

function units2kg(howMany: number, units: string): number {
    switch (units) {
        case "g":
            return g2kg(howMany);
        case "mg":
            return mg2kg(howMany);
        case "ounce":
            return ounce2kg(howMany);
        case "pound":
            return pound2kg(howMany);
        case "tonne":
            return tonne2kg(howMany);
        case "kg":
            return howMany;
        default:
            return NaN;
    }
}

const massUnits: selectChoice[] = [
    { id: 0, name: "g" },
    { id: 1, name: "kg" },
    { id: 2, name: "mg" },
    { id: 3, name: "ounce" },
    { id: 4, name: "pound" },
    { id: 5, name: "tonne" },
]

const massInfo: string = "limit: 0-1e15 [kg], SI and imperial/US units, [ounce] == [oz], [pound] = [lb]";

export { massInfo, massUnits, kg2units, units2kg };
