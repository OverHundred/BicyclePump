export interface IPressureCalculatorData {
    tireWidth: Millimeters
    riderWeight: Kilograms
    minPreassure: PSI
    maxPreassure: PSI
    bikeWeight?: Kilograms
}

export type Millimeters = number
export type Kilograms = number
export type PSI = number

export interface IPreassureCalculatorResult {
    front: PSI
    back: PSI
}