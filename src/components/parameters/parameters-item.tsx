import React, {Dispatch} from "react";
import MeasurementUnit from "../../enums/measurement-unit";

interface ParametersItemProps {
    title: string,
    type: string,
    value: number,
    set: Dispatch<React.SetStateAction<number>>
}

const ParametersItem = ({ title, type, value, set }: ParametersItemProps) => {
    return (
        <div className="input">
            <div className="input__heading">
                <label className="heading" htmlFor={type}>
                    {title}
                </label>
                <span className="input__heading-unit">
                        {MeasurementUnit[type as keyof typeof MeasurementUnit]}
                      </span>
            </div>
            <div className="input__wrapper">
                <input type="text" id={type} name={type} placeholder="0" inputMode="decimal" maxLength={3} value={value}
                       required onChange={(evt) => set(+evt.currentTarget.value)}/>
            </div>
        </div>
    )
};

export default ParametersItem;
