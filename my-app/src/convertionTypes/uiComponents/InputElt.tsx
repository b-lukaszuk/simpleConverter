import React, { ChangeEvent, ReactElement } from "react";

import "./InputElt.css";

interface handlerFn {
    (event: ChangeEvent<HTMLInputElement>): void
}

interface Props {
    changeHandler: handlerFn;
    id: string;
    label: string;
    labelBr?: boolean;
    length: number;
    pattern?: string;
    placeholder?: string;
    size: number;
    value: string;
}

const InputElt: React.FC<Props> = (props): ReactElement<HTMLInputElement> => {
    const changeHandlerIn: handlerFn = props.changeHandler;
    const idIn: string = props.id;
    const labelIn: string = props.label;
    const labelBrIn: boolean = props.labelBr ? props.labelBr : false;
    const lengthIn: number = props.length;
    const patternIn: string = props.pattern ? props.pattern : ".*";
    const placeholderIn: string = props.placeholder ? props.placeholder : "";
    const sizeIn: number = props.size;
    const valueIn: string = props.value;

    return (
        <div>
            <span>{labelIn}: &nbsp;</span>
            {labelBrIn ? <span><br /> <br /></span> : ""}
            <input id={idIn} name={idIn} type="text"
                pattern={patternIn} placeholder={placeholderIn}
                value={valueIn} maxLength={lengthIn} size={sizeIn}
                onChange={changeHandlerIn} />
        </div>
    )

}

export default InputElt;
