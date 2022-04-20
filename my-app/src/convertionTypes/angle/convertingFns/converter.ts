import Angle from "./Angle";

interface unitsChoice {
    id: number;
    unit: string;
}

function turns2units(howMany: number, units: string): number {
    let angle: Angle = new Angle(howMany);
    return angle.getAngleInUnits(units);
}

function units2turns(howMany: number, units: string): number {
    let angle: Angle = new Angle(0);
    angle.setAngleInUnits(howMany, units);
    return angle.getAngleInUnits("turns");
}

const angleUnits: unitsChoice[] = [
    { id: 0, unit: "degrees" },
    { id: 1, unit: "gradians" },
    { id: 2, unit: "mils" },
    { id: 3, unit: "radians" },
]

export { turns2units, units2turns, angleUnits };
