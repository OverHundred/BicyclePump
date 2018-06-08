import { WrongTireWithException, WrongRiderWeightException, WrongBikeWeightException, WrongMaxPreassureException, WrongMinPreassureException } from "./errors";
import { IPressureCalculatorData } from "./interfaces";
import { isNumber } from 'lodash'

export const validateInput = (userData: IPressureCalculatorData) => {
    let isTireWidthValid = isNumber(userData.tireWidth) && userData.tireWidth >= 10 && userData.tireWidth <= 100
    if(!isTireWidthValid)
        throw new WrongTireWithException()

    let isRiderWeightValid = isNumber(userData.riderWeight) && userData.riderWeight > 0
    if(!isRiderWeightValid)
        throw new WrongRiderWeightException()

    if(userData.bikeWeight != undefined){
        
        let isBikeWeightValid = isNumber(userData.bikeWeight) && userData.bikeWeight > 0
        if(!isBikeWeightValid)
            throw new WrongBikeWeightException()
    }

    let isMaxPreassureValid = isNumber(userData.maxPreassure) && userData.maxPreassure > 0
    if(!isMaxPreassureValid)
        throw new WrongMaxPreassureException()

    let isMinPreassureValid = isNumber(userData.minPreassure) && userData.minPreassure > 0
    if(!isMinPreassureValid)
        throw new WrongMinPreassureException()
    
}