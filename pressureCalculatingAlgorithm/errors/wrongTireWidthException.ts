import { CalculatorException } from "./base";

export class WrongTireWithException extends CalculatorException {
    public message: string = ''
    constructor () {
        super()
        this.message = 'Tire width value is not correct. It should be a number beetwen 10mm and 100mm'
    }
}