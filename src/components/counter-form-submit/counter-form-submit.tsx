import CounterFormSubmitBtn from "./counter-form-submit-btn";
import CounterFormResetBtn from "./counter-form-reset-btn";


interface CounterFormSubmitProps {
    submitIsAble: boolean,
    resetIsAble: boolean
    reset: () => void
}

const CounterFormSubmit = ({ submitIsAble, resetIsAble, reset }: CounterFormSubmitProps) => {
    return (
        <div className="form__submit">
            <CounterFormSubmitBtn title={'Рассчитать'} disabled={!submitIsAble}/>
            <CounterFormResetBtn title={'Очистить поля и расчёт'} disabled={!resetIsAble} reset={reset}/>
        </div>
    )
};

export default CounterFormSubmit;
