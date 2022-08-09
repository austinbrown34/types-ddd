import { ValueObject } from '../core';
import { Result } from '../core';
import CustomNumberValueObject from './custom-number.value-object';
import { UnitOfMeasure } from './unit-of-measure.value-object';
import { CustomNmbProps } from './custom-number.value-object';
interface DimensionValueObjectProps {
    dimension: CustomNumberValueObject;
    unit: UnitOfMeasure;
}
interface Props {
    value: number;
    unit: UnitOfMeasure;
}
export declare class DimensionValueObject extends ValueObject<DimensionValueObjectProps> {
    private constructor();
    get dimension(): CustomNumberValueObject;
    get unit(): UnitOfMeasure;
    /**
     *
     * @description this method does not change value, only measure unit.
     * @summary to convert value and unit use toMT / toMM ...
     * @param newDimension as CustomNumberValueObject
     * @returns instance
     */
    changeValue(newDimension: CustomNumberValueObject): DimensionValueObject;
    /**
     *
     * @description this method does not change value, only measure unit.
     * @summary to convert value and unit use toMT / toMM ...
     * @param newDimensionUnit as UnitOfMeasure MT/MM/CM etc.
     * @returns instance
     */
    changeDimensionUnit(newDimensionUnit: UnitOfMeasure): DimensionValueObject;
    private updateInstanceValues;
    /**
     * convert value and unit to cm
     * @returns instance
     */
    toCM(): DimensionValueObject;
    /**
     * convert value and unit to mm
     * @returns instance
     */
    toMM(): DimensionValueObject;
    /**
     * convert value and unit to mt
     * @returns instance
     */
    toMT(): DimensionValueObject;
    /**
     * convert value and unit to inch
     * @returns instance
     */
    toINCH(): DimensionValueObject;
    /**
     * convert value and unit to foot
     * @returns instance
     */
    toFOOT(): DimensionValueObject;
    /**
     * convert value and unit to yard
     * @returns instance
     */
    toYARD(): DimensionValueObject;
    static create({ unit, value }: Props, customValidation?: CustomNmbProps): Result<DimensionValueObject>;
}
export default DimensionValueObject;
