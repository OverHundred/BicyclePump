import { cloneDeep } from 'lodash'
import { IPreassureCalculatorResult, IPressureCalculatorData } from './interfaces'
import { validateInput } from './validateInput';

/* 
    Algorithm is taken based on article from:
    bikequaterly.com
*/
export const calculatePreassure = (userData: IPressureCalculatorData): IPreassureCalculatorResult => {
    validateInput(userData)
    
    let bikeWeight = userData.bikeWeight ? userData.bikeWeight : 10
    let totalWeight = userData.riderWeight + bikeWeight

    let a = 0.00384416 * Math.pow(userData.tireWidth, 2) - 0.3314 * userData.tireWidth + 8.04906//(57 / 9) - userData.tireWidth * (5 / 30)

    //Weight distribiution is 40% front and 60% back
    let frontWeight = 40 / 100 * totalWeight
    let backWeight = 60 / 100 * totalWeight

    let calculatedValues = {
        front: a * frontWeight - 10,
        back: a * backWeight - 10
    }

    return putPreassureBetweenMinAndMax(calculatedValues, userData)
}

export const putPreassureBetweenMinAndMax = (calculatedValues: IPreassureCalculatorResult, userData: IPressureCalculatorData) => {
    let newCalculatedValues = cloneDeep(calculatedValues)

    if (newCalculatedValues.front > userData.maxPreassure)
        newCalculatedValues.front = userData.maxPreassure
    else if (newCalculatedValues.front < userData.minPreassure)
        newCalculatedValues.front = userData.minPreassure

    if (newCalculatedValues.back > userData.maxPreassure)
        newCalculatedValues.back = userData.maxPreassure
    else if (newCalculatedValues.back < userData.minPreassure)
        newCalculatedValues.back = userData.minPreassure

    return newCalculatedValues
} 