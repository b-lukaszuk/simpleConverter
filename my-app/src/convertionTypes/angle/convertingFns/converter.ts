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
    return angle.getAngleInUnits("turn");
}

const angleUnits: unitsChoice[] = [
    { id: 0, unit: "degree" },
    { id: 1, unit: "gradian" },
    { id: 2, unit: "mil" },
    { id: 3, unit: "radian" },
    { id: 4, unit: "turn" },
]

const angleInfo: string = "limit: 0-1 [turn], both sides (-/+), rounds up";

export { turns2units, units2turns, angleUnits, angleInfo };
