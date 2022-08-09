import { ValueObject } from '../core';
import { Result } from '../core';
export declare enum UnitsOfWeight {
    'KG' = "KG",
    'G' = "G",
    'MG' = "MG",
    'TON' = "TON",
    'LB' = "LB",
    'OZ' = "OZ"
}
export declare enum UnitsOfWeightDescription {
    'KG' = "KILOGRAM",
    'G' = "GRAM",
    'MG' = "MILLIGRAM",
    'TON' = "TONNE",
    'LB' = "POUND",
    'OZ' = "OUNCE"
}
export declare type UnitOfWeight = keyof typeof UnitsOfWeight;
interface Prop {
    value: UnitOfWeight;
}
export declare class WeightUnitValueObject extends ValueObject<Prop> {
    private constructor();
    value(): UnitOfWeight;
    get description(): UnitsOfWeightDescription;
    validation(_key: any, _value: any): boolean;
    static isValidProps(value: UnitOfWeight): boolean;
    static create(value: UnitOfWeight): Result<WeightUnitValueObject>;
}
export default WeightUnitValueObject;
