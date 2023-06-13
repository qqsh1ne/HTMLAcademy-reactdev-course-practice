interface CounterFormSubmitBtnProps {
    title: string
    disabled?: boolean
}

const CounterFormSubmitBtn = ({ title, ...attrs }: CounterFormSubmitBtnProps) => {
    return (
        <button className="form__submit-button button" name="submit" type="submit" {...attrs}>
            {title}
        </button>
    )
};

export default CounterFormSubmitBtn;
