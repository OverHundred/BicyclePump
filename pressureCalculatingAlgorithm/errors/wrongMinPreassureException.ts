import { CalculatorException } from "./base";

export class WrongMinPreassureException extends CalculatorException {
    public message: string = ''
    constructor () {
        super()
        this.message = 'Minimum preassure value is not correct. It should be a number bigger than 0'
    }
}