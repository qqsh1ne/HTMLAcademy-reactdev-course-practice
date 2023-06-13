import {Sex} from "../enums/Sex";
import ActivitiesValue from "../enums/activities-value";

export const initialStates = {
    sex: Sex.Male,
    age: 0,
    height: 0,
    weight: 0,
    activity: ActivitiesValue['minimal']
};
