import GenderSwitcher from "./gender-switcher/gernder-switcher";
import Parameters from "./parameters/parameters";
import ActivitiesList from "./activities-list/activities-list";
import CounterFormSubmit from "./counter-form-submit/counter-form-submit";
import {useEffect, useState} from "react";
import {initialStates} from "../consts/initial-states";
import {Sex} from "../enums/Sex";
import ActivitiesValue from "../enums/activities-value";

interface CounterFormProps {
    onSubmit: (sex: Sex, activity: ActivitiesValue, weight: number, age: number, height: number) => void
    resetResults: () => void
}

const CounterForm = ({ onSubmit, resetResults }: CounterFormProps) => {
    const [sex, setSex] = useState(initialStates.sex);
    const [age, setAge] = useState(initialStates.age);
    const [height, setHeight] = useState(initialStates.height);
    const [weight, setWeight] = useState(initialStates.weight);
    const [activity, setActivity] = useState(initialStates.activity);
    const [submitIsAble, setSubmitIsAble] = useState<boolean>(false);
    const [resetIsAble, setResetIsAble] = useState<boolean>(false);

    const reset = () => {
        setSex(initialStates.sex);
        setAge(initialStates.age);
        setHeight(initialStates.height);
        setWeight(initialStates.weight);
        setActivity(initialStates.activity);
        resetResults();
    }

    useEffect(() => {
        const initialValues = [initialStates.age, initialStates.height, initialStates.weight];

        setResetIsAble([age, height, weight].some((element, i) => element !== initialValues[i]))
        setSubmitIsAble([age, height, weight].every((element, i) => element !== initialValues[i]))
    }, [age, height, weight])

    return (
        <form className="counter__form form"
              name="counter"
              action="#"
              method="post"
              onSubmit={(evt) => {
                    evt.preventDefault();
                    onSubmit(sex, activity, weight, age, height);
                }
              }>
            <GenderSwitcher set={setSex}/>
            <Parameters age={age}
                        weight={weight}
                        height={height}
                        setAge={setAge}
                        setHeight={setHeight}
                        setWeight={setWeight}
                        />
            <ActivitiesList set={setActivity}/>
            <CounterFormSubmit submitIsAble={submitIsAble} resetIsAble={resetIsAble} reset={reset}/>
        </form>
    );
};

export default CounterForm;
