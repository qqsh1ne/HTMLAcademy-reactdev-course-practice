import ActivitiesListItem from "./activities-list-item";
import React, {Dispatch} from "react";
import ActivitiesValue from "../../enums/activities-value";

interface ActivitiesListProps {
    set: Dispatch<React.SetStateAction<ActivitiesValue>>
}

const ActivitiesList = ({ set }: ActivitiesListProps) => {
    return (
        <fieldset className="form__item">
            <legend className="heading">
                Физическая активность
            </legend>
            <ul className="radios-group">
                <ActivitiesListItem title={'Минимальная'} type={'minimal'} description={'Сидячая работа и нет физических нагрузок'} set={set} defaultChecked={true}/>
                <ActivitiesListItem title={'Низкая'} type={'low'} description={'Редкие, нерегулярные тренировки, активность в быту'} set={set}/>
                <ActivitiesListItem title={'Средняя'} type={'medium'} description={'Тренировки 3-5 раз в неделю'} set={set}/>
                <ActivitiesListItem title={'Высокая'} type={'high'} description={'Тренировки 6-7 раз в неделю'} set={set}/>
                <ActivitiesListItem title={'Очень высокая'} type={'maximal'} description={'Больше 6 тренировок в неделю и физическая работа'} set={set}/>
            </ul>
        </fieldset>
    )
};

export default ActivitiesList
