import CustomNumberValueObject from './custom-number.value-object';
import { Result } from '../core';
import { ValueObject } from '../core';
import { UnitOfWeight } from './weight-unit.value-object';
import { CustomNmbProps } from './custom-number.value-object';
interface WeightValueObjectProps {
    unit: UnitOfWeight;
    weight: CustomNumberValueObject;
}
interface Props {
    unit: UnitOfWeight;
    value: number;
}
export declare class WeightValueObject extends ValueObject<WeightValueObjectProps> {
    private constructor();
    /**
     * @returns WeightUnitValueObject instance
     */
    get unit(): UnitOfWeight;
    /**
     * @returns CustomNumberValueObject instance
     */
    get weight(): CustomNumberValueObject;
    /**
     *
     * @param newValue WeightUnitValueObject instance
     * @returns instance
     */
    changeWeightUnit(newValue: UnitOfWeight): WeightValueObject;
    /**
     *
     * @param newValue CustomNumberValueObject instance
     * @returns instance
     */
    changeValue(newValue: CustomNumberValueObject): WeightValueObject;
    private updateInstanceValues;
    /**
     * convert instance value and unit to kilogram
     * @returns instance
     */
    toKG(): WeightValueObject;
    /**
     * convert instance value and unit to gram
     * @returns instance
     */
    toG(): WeightValueObject;
    /**
     * convert instance value and unit to milligram
     * @returns instance
     */
    toMG(): WeightValueObject;
    /**
     * convert instance value and unit to tonne
     * @returns instance
     */
    toTON(): WeightValueObject;
    /**
     * convert instance value and unit to libre
     * @returns instance
     */
    toLB(): WeightValueObject;
    /**
     * convert instance value and unit to onz
     * @returns instance
     */
    toOZ(): WeightValueObject;
    static create({ value, unit }: Props, customValidation?: CustomNmbProps): Result<WeightValueObject>;
}
export default WeightValueObject;
