import { convertIfInRange } from "../../utils/convertIfInRange";
import { METREMIN, METREMAX, metre2league } from "./metre";

const LEAGUEMIN: number = metre2league(METREMIN);
const LEAGUEMAX: number = metre2league(METREMAX);

function league2metre(league: number): number {
    return convertIfInRange(league,
        (l: number): number => l * 5556,
        LEAGUEMIN, LEAGUEMAX);
}

export { league2metre };
