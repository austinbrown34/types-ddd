import { ValueObject } from '../core';
import { Result } from '../core';
export declare enum UnitsOfMeasure {
    'CM' = "CM",
    'MM' = "MM",
    'MT' = "MT",
    'INCH' = "INCH",
    'FOOT' = "FOOT",
    'YARD' = "YARD"
}
export declare enum UnitsDescription {
    'CM' = "CENTIMETER",
    'MM' = "MILLIMETER",
    'MT' = "METER",
    'INCH' = "INCHES",
    'FOOT' = "FOOT",
    'YARD' = "YARD"
}
export declare type UnitOfMeasure = keyof typeof UnitsOfMeasure;
interface Prop {
    value: UnitOfMeasure;
}
export declare class UnitOfMeasureValueObject extends ValueObject<Prop> {
    private constructor();
    value(): UnitOfMeasure;
    get description(): UnitsDescription;
    validation(_key: any, _value: any): boolean;
    static isValidProps(value: UnitOfMeasure): boolean;
    static create(value: UnitOfMeasure): Result<UnitOfMeasureValueObject>;
}
export default UnitOfMeasureValueObject;
