import { validateInput } from '../../pressureCalculatingAlgorithm/validateInput';
import { IPressureCalculatorData } from '../../pressureCalculatingAlgorithm/interfaces';
import { WrongTireWithException } from '../../pressureCalculatingAlgorithm/errors/wrongTireWidthException';
import { WrongMinPreassureException } from '../../pressureCalculatingAlgorithm/errors/wrongMinPreassureException';
import { WrongMaxPreassureException } from '../../pressureCalculatingAlgorithm/errors/wrongMaxPreassureException';
import { WrongBikeWeightException } from '../../pressureCalculatingAlgorithm/errors/wrongBikeWeightException';
import { WrongRiderWeightException } from '../../pressureCalculatingAlgorithm/errors/wrongRiderWeightException';

describe('Preassure calculator validate input', () => {
    it('should throw wrong tire width', () => {
        let userData: IPressureCalculatorData = {
            tireWidth: -1,
            riderWeight: 9999,
            minPreassure: 40,
            maxPreassure: 65
        }

        expect(() => {
            validateInput(userData)
        }).toThrow(WrongTireWithException)
    });

    it('should throw wrong min preassure', () => {
        let userData: IPressureCalculatorData = {
            tireWidth: 50,
            riderWeight: 50,
            minPreassure: -1,
            maxPreassure: 65
        }

        expect(() => {
            validateInput(userData)
        }).toThrow(WrongMinPreassureException)
    });

    it('should throw wrong max preassure', () => {
        let userData: IPressureCalculatorData = {
            tireWidth: 50,
            riderWeight: 50,
            minPreassure: 50,
            maxPreassure: -1
        }

        expect(() => {
            validateInput(userData)
        }).toThrow(WrongMaxPreassureException)
    });

    it('should throw wrong bike weight', () => {
        let userData: IPressureCalculatorData = {
            tireWidth: 50,
            riderWeight: 50,
            minPreassure: 50,
            maxPreassure: 60,
            bikeWeight: -2
        }

        expect(() => {
            validateInput(userData)
        }).toThrow(WrongBikeWeightException)
    });

    it('should throw wrong rider weight', () => {
        let userData: IPressureCalculatorData = {
            tireWidth: 50,
            riderWeight: -2,
            minPreassure: 50,
            maxPreassure: 60,
            bikeWeight: 10
        }

        expect(() => {
            validateInput(userData)
        }).toThrow(WrongRiderWeightException)
    });

    it('should not throw', () => {
        let userData: IPressureCalculatorData = {
            tireWidth: 50,
            riderWeight: 50,
            minPreassure: 50,
            maxPreassure: 60,
            bikeWeight: 30
        }

        expect(() => {
            validateInput(userData)
        }).not.toThrow()
    });
})
