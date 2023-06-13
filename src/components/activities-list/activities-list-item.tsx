import React, {Dispatch} from "react";
import ActivitiesValue from "../../enums/activities-value";

interface ActivitiesListItemProps extends React.HTMLAttributes<HTMLInputElement> {
    title: string
    type: string
    description: string
    set: Dispatch<React.SetStateAction<ActivitiesValue>>
    defaultChecked?: boolean
}

const ActivitiesListItem = ({ title, type, description, set, ...attrs}: ActivitiesListItemProps) => {
    return (
        <li className="radio">
            <div className="radio__wrapper">
                <input id={`activity-${type}`}
                       name="activity"
                       value={ActivitiesValue[type as keyof typeof ActivitiesValue]}
                       type="radio"
                       onInput={(evt) => set(evt.currentTarget.value as ActivitiesValue)}
                       required
                       {...attrs}/>
                <label htmlFor={`activity-${type}`}>
                    {title}
                </label>
            </div>
            <p className="radio__description">
                {description}
            </p>
        </li>
    )
};

export default ActivitiesListItem;
