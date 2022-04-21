import { ReactElement } from "react";
import selectChoice from "../interfaces/selectChoice";

const getOption = (unit: selectChoice): ReactElement<HTMLElement> => {
    return (
        <option key={unit.id} value={unit.name}>
            {unit.name}
        </option>
    );
};

export default getOption;
