import { d2t } from "./degree";
import { g2t } from "./gradian";
import { m2t } from "./mil";
import { r2t } from "./radian";
import { t2d, t2g, t2m, t2r } from "./turns";

class Angle {
    private _turns: number = 0;
    private _negative: boolean = false;

    constructor(turns: number = 0) {
        this._setInternals(turns);
    }

    private _setInternals(turns: number = 0): void {
        turns = (Math.abs(turns) > 1) ? (turns % 1) : turns;
        if (turns < 0) {
            this._turns = 1 - turns;
            this._negative = true;
        } else {
            this._turns = turns;
            this._negative = false;
        }
    }

    private _getTurns(): number {
        return this._negative ? (1 - this._turns) : this._turns;
    }

    public setAngleInUnits(angle: number, units: string): void {
        if (units === "gradians") {
            this._setInternals(g2t(angle));
        }
        else if (units === "mils") {
            this._setInternals(m2t(angle));
        }
        else if (units === "radians") {
            this._setInternals(r2t(angle));
        }
        else if (units === "degrees") {
            this._setInternals(d2t(angle));
        }
    }

    public getAngleInUnits(units: string): number {
        if (units === "gradians") {
            return t2g(this._getTurns());
        }
        else if (units === "mils") {
            return t2m(this._getTurns());
        }
        else if (units === "radians") {
            return t2r(this._getTurns());
        }
        else if (units === "degrees") {
            return t2d(this._getTurns());
        }
        else if (units === "turns") {
            return this._getTurns();
        }
        else {
            return NaN;
        }
    }
}

export default Angle;
