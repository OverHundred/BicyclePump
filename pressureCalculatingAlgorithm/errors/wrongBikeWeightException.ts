import { CalculatorException } from "./base";

export class WrongBikeWeightException extends CalculatorException {
    public message: string = ''
    constructor () {
        super()
        this.message = 'Bike weight value is not correct. It should be a number bigger than 0'
    }
}