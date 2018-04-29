import { calculate } from '../../pressureCalculatingAlgorithm/calculator'


it('should calculate', () => {
    let result = calculate()

    expect(result).toEqual(2)
});
