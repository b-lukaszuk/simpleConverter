import selectChoice from "../../interfaces/selectChoice";

// todo
// main units: m/s
// secondary units:
// Ma, ft/s, knot, km/h, mph

function mPerSec2units(howMany: number, units: string): number {
    switch (units) {
        case "m/s":
            return howMany;
        default:
            return NaN;
    }
}

function units2mPerSec(howMany: number, units: string): number {
    switch (units) {
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
]

const speedInfo: string = "limit: 0-1e15 [m/s], Ma - Mach number - speed of object/speed of sound [1225 km/h]";

export { speedInfo, speedUnits, mPerSec2units, units2mPerSec };
