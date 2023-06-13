import {Sex} from "../enums/Sex";
import ActivitiesValue from "../enums/activities-value";
import {ActivitiesCoefs} from "./activities-coefs";

export enum FormulaCoefsByTypes {
    Loss = 0.85,
    Usual = 1,
    Gather = 1.15
}

const getMaleFormula = (coef: number) =>
    (weight: number, height: number, age: number, activity: ActivitiesValue) =>
        ((10 * weight) + (6.25 * height) - (5 * age) + 5) * coef * ActivitiesCoefs[activity]

const getFemaleFormula = (coef: number) =>
    (weight: number, height: number, age: number, activity: ActivitiesValue) =>
        ((10 * weight) + (6.25 * height) - (5 * age) - 161) * coef * ActivitiesCoefs[activity]

const formulas = {
    [Sex.Male]: {
        loss: getMaleFormula(FormulaCoefsByTypes.Loss),
        normal: getMaleFormula(FormulaCoefsByTypes.Usual),
        gather: getMaleFormula(FormulaCoefsByTypes.Gather)
    },
    [Sex.Female]: {
        loss: getFemaleFormula(FormulaCoefsByTypes.Loss),
        normal: getFemaleFormula(FormulaCoefsByTypes.Usual),
        gather: getFemaleFormula(FormulaCoefsByTypes.Gather)
    },
}

export default formulas;
