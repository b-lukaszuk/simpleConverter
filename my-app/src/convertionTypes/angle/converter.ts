import Angle from "./Angle";
import selectChoice from "../../interfaces/selectChoice";

function turns2units(howMany: number, units: string): number {
    let angle: Angle = new Angle(howMany);
    return angle.getAngleInUnits(units);
}

function units2turns(howMany: number, units: string): number {
    let angle: Angle = new Angle(0);
    angle.setAngleInUnits(howMany, units);
    return angle.getAngleInUnits("turn");
}

const angleUnits: selectChoice[] = [
    { id: 0, name: "degree" },
    { id: 1, name: "gradian" },
    { id: 2, name: "mil" },
    { id: 3, name: "radian" },
    { id: 4, name: "turn" },
]

const angleInfo: string = "limit: 0-1 [turn], both sides (-/+), angles wrap around 1 [turn]";

export { turns2units, units2turns, angleUnits, angleInfo };
