import GenderSwitcherItem from "./switcher-item";
import {Sex} from "../../enums/Sex";
import {FormEvent} from "react";

interface GenderSwitcherProps {
    set: any
}

const GenderSwitcher = ({ set }: GenderSwitcherProps ) => {
    return (
        <div className="form__item">
            <h2 className="heading">
                Пол
            </h2>
            <ul className="switcher">
                <GenderSwitcherItem title={'Мужчина'} gender={Sex.Male} onInput={(evt: FormEvent<HTMLInputElement>) => set(evt.currentTarget.value as Sex)} defaultChecked={true}/>
                <GenderSwitcherItem title={'Женщина'} gender={Sex.Female} onInput={(evt: FormEvent<HTMLInputElement>) => set(evt.currentTarget.value as Sex)}/>
            </ul>
        </div>
    );
};

export default GenderSwitcher
