import selectChoice from "../../interfaces/selectChoice";

// todo:
// main unit: pascal
// secondary units:
// bar
// atm
// torr (mm/hg)
// psi

function pascal2units(howMany: number, units: string): number {
    console.log("Not implemented yet");
    return NaN;
}

function units2pascal(howMany: number, units: string): number {
    console.log("Not implemented yet");
    return NaN;
}

const pressureInfo: string = "limit: 0-1e8 [pascal], [torr] == [mmHg]";

const pressureUnits: selectChoice[] = [
    { id: 0, name: "not_implemented_yet" },
];

export { pascal2units, units2pascal, pressureInfo, pressureUnits };
