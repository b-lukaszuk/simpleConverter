import { ReactElement } from "react";
import ISelectChoice from "../interfaces/ISelectChoice";

const getOption = (unit: ISelectChoice): ReactElement<HTMLElement> => {
    return (
        <option key={unit.id} value={unit.name}>
            {unit.name}
        </option>
    );
};

export default getOption;
