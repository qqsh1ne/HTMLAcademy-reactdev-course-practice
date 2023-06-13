import CounterResultItem from "./counter-result-item";

interface CounterResultProps {
    resultsAreShown: boolean
    lossCalories: number
    usualCalories: number
    gatherCalories: number
}

const CounterResult = ({ resultsAreShown, lossCalories, usualCalories, gatherCalories }: CounterResultProps) => {
    if (!resultsAreShown)
        return <></>
    return (
        <section className="counter__result">
            <h2 className="heading">
                Ваша норма калорий
            </h2>
            <ul className="counter__result-list">
                <CounterResultItem title={'поддержание веса'} caloriesNorm={usualCalories}/>
                <CounterResultItem title={'снижение веса'} caloriesNorm={lossCalories}/>
                <CounterResultItem title={'набор веса'} caloriesNorm={gatherCalories}/>
            </ul>
        </section>
    );
};

export default CounterResult;
