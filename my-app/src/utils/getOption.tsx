import { ReactElement } from "react";

interface unitsChoice {
    id: number;
    unit: string;
}

const getOption = (unit: unitsChoice): ReactElement<HTMLElement> => {
    return (
        <option key={unit.id} value={unit.unit}>
            {unit.unit}
        </option>
    );
};

export default getOption;
