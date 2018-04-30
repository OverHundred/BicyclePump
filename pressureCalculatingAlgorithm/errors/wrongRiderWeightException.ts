import { CalculatorException } from "./base";

export class WrongRiderWeightException extends CalculatorException {
    public message: string = ''
    constructor () {
        super()
        this.message = 'Rider weight value is not correct. It should be a number bigger than 0'
    }
}