import Angle from "./Angle";

function turns2units(howMany: number, units: string): number {
    let angle: Angle = new Angle(howMany);
    return angle.getAngleInUnits(units);
}

function units2turns(howMany: number, units: string): number {
    let angle: Angle = new Angle(0);
    angle.setAngleInUnits(howMany, units);
    return angle.getAngleInUnits("turns");
}

export { turns2units, units2turns };
