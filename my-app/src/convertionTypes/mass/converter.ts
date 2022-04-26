import selectChoice from "../../interfaces/selectChoice";

// main unit: kg
// secondary units:
// SI: mg, g, tonne,
// imperial/US: pound (lb), ounce (oz)

// todo
function kg2units(howMany: number, units: string): number {
    switch (units) {
        case "g":
            return NaN;
        case "kg":
            return howMany;
        default:
            return NaN;
    }
}

// todo
function units2kg(howMany: number, units: string): number {
    switch (units) {
        case "g":
            return NaN;
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

const massInfo: string = "limit: 0-1e15 [kg], SI and imperial/US units";

export { massInfo, massUnits, kg2units, units2kg };
