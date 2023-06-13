import CounterForm from "./counter-form";
import CounterResult from "./counter-result";
import {useState} from "react";
import {Sex} from "../enums/Sex";
import ActivitiesValue from "../enums/activities-value";
import formulas from "../consts/formulas";

const Counter = () => {
    const [resultsAreShown, setResultsAreShown] = useState(false);
    const [usualCalories, setUsualCalories] = useState(0);
    const [lossCalories, setLossCalories] = useState(0);
    const [gatherCalories, setGatherCalories] = useState(0);

    const formSubmitHandler = (sex: Sex, activity: ActivitiesValue, weight: number, age: number, height: number) => {
        setLossCalories((formulas[sex].loss(weight, height, age, activity)));
        setUsualCalories((formulas[sex].normal(weight, height, age, activity)));
        setGatherCalories((formulas[sex].gather(weight, height, age, activity)));
        setResultsAreShown(true);
    }

    return (
        <main className='main'>
            <div className="container">
                <article className='counter'>
                    <h1 className="counter__heading heading-main">
                        Счётчик калорий
                    </h1>
                    <CounterForm onSubmit={formSubmitHandler} resetResults={() => setResultsAreShown(false)}/>
                    <CounterResult resultsAreShown={resultsAreShown}
                                   lossCalories={lossCalories}
                                   usualCalories={usualCalories}
                                   gatherCalories={gatherCalories}
                    />
                </article>
            </div>
        </main>
    );
};

export default Counter;
