interface CounterResultItemProps {
    title: string
    caloriesNorm: number
}

const CounterResultItem = ({ title, caloriesNorm }: CounterResultItemProps) => {
    const formattedCaloriesNorm = caloriesNorm.toLocaleString()
    return (
        <li className="counter__result-item">
            <h3>
                <span id="calories-norm">{formattedCaloriesNorm}</span> ккал
            </h3>
            <p>
                {title}
            </p>
        </li>
    )
};

export default CounterResultItem;
