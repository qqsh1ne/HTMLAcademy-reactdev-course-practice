import ParametersItem from "./parameters-item";
import React, {Dispatch} from "react";

interface ParametersProps {
    age: number,
    height: number,
    weight: number,
    setAge: Dispatch<React.SetStateAction<number>>,
    setHeight: Dispatch<React.SetStateAction<number>>,
    setWeight: Dispatch<React.SetStateAction<number>>
}


const Parameters = ({ age, height, weight, setAge, setHeight, setWeight }: ParametersProps) => {
    return (
        <fieldset className="form__item form__parameters" name="parameters">
            <legend className="visually-hidden">
                Физические параметры
            </legend>
            <div className="inputs-group">
                <ParametersItem title={'Возраст'} type={'age'} value={age} set={setAge}/>
                <ParametersItem title={'Рост'} type={'height'} value={height} set={setHeight}/>
                <ParametersItem title={'Вес'} type={'weight'} value={weight} set={setWeight}/>
            </div>
        </fieldset>
    )
};

export default Parameters;
