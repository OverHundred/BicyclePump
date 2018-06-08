import { calculatePreassure } from '../../pressureCalculatingAlgorithm/calculator'
import { IPressureCalculatorData } from '../../pressureCalculatingAlgorithm/interfaces'

describe('Preassure calculator', () => {
    it('should not exceed maximum preassure', () => {
        let userData: IPressureCalculatorData = {
            tireWidth: 53.3,
            riderWeight: 9999,
            minPreassure: 40,
            maxPreassure: 65
        }
    
        let result = calculatePreassure(userData)
        
        let eps = 0.000000001

        expect(result.back + eps >= 65 && result.back - eps <= 65).toEqual(true)
        expect(result.front + eps >= 65 && result.front - eps <= 65).toEqual(true)
    });
    it('should not be smaller than minimum preassure', () => {
        let userData: IPressureCalculatorData = {
            tireWidth: 53.3,
            riderWeight: 1,
            minPreassure: 40,
            maxPreassure: 65
        }
    
        let result = calculatePreassure(userData)
        
        let eps = 0.000000001

        expect(result.back + eps >= 40 && result.back - eps <= 40).toEqual(true)
        expect(result.front + eps >= 40 && result.front - eps <= 40).toEqual(true)
    });

    it('should not exceed beetwen max and min', () => {
        let userData: IPressureCalculatorData = {
            tireWidth: 53.3,
            riderWeight: 70,
            minPreassure: 40,
            maxPreassure: 65
        }
    
        let result = calculatePreassure(userData)
        
        expect(result.back <= 65 && result.back >= 40).toEqual(true)
        expect(result.front <= 65 && result.front >= 40).toEqual(true)
    });

    it('should not exceed beetwen max and min', () => {
        let userData: IPressureCalculatorData = {
            tireWidth: 53.3,
            riderWeight: 70,
            minPreassure: 40,
            maxPreassure: 65
        }
    
        let result = calculatePreassure(userData)
        
        expect(result.back <= 65 && result.back >= 40).toEqual(true)
        expect(result.front <= 65 && result.front >= 40).toEqual(true)
    });
})
