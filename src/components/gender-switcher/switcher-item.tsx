import React from "react";

interface GenderSwitcherItemProps extends React.HTMLAttributes<HTMLInputElement> {
    title: string
    gender: string
    onInput: any
    defaultChecked?: boolean
}

const GenderSwitcherItem = ({ title, gender, onInput, ...attrs }: GenderSwitcherItemProps) => {
    return (
        <li className="switcher__item">
            <input id={`gender-${gender}`}
                   name="gender"
                   value={gender}
                   type="radio"
                   onInput={onInput}
                   required
                   {...attrs} />
            <label htmlFor={`gender-${gender}`}>
                {title}
            </label>
        </li>
    );
};

export default GenderSwitcherItem;
