import { CalculatorException } from "./base";

export class WrongMaxPreassureException extends CalculatorException {
    public message: string = ''
    constructor () {
        super()
        this.message = 'Maximum preassure value is not correct. It should be a number bigger than 0'
    }
}