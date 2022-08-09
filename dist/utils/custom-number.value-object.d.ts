import { ValueObject } from '../core';
import { Result } from '../core';
export interface ICustomNmbValidator {
    (value: number): boolean;
}
export interface CustomNmbProps {
    MAX?: number;
    MIN?: number;
    VALIDATOR?: ICustomNmbValidator;
}
interface Prop {
    value: number;
}
export declare class CustomNumberValueObject extends ValueObject<Prop> {
    private readonly customProps;
    private constructor();
    /**
     * @returns original value as number
     */
    value(): number;
    /**
     * @description return true if value is positive and false if not.
     * @returns boolean
     */
    get isPositive(): boolean;
    /**
     *
     * @param value as number
     * @returns true if instance value is greater than provided value and false if not.
     */
    isGreaterThan(value: number): boolean;
    /**
     *
     * @param value as number
     * @returns
     */
    isEqualTo(value: number): boolean;
    /**
     * @returns validation
     * @method VALIDATOR: function (value: number): boolean;
     * @property
     * MAX: Number.MAX_SAFE_INTEGER,
     * @property
     * MIN: Number.MIN_SAFE_INTEGER,
     */
    get customValidation(): CustomNmbProps;
    /**
     *
     * @param value number
     * @param customProps @see CustomNmbProps
     * @returns boolean
     */
    static isValidValue(value: number, customProps?: CustomNmbProps): boolean;
    static create(value: number, customProps?: CustomNmbProps): Result<CustomNumberValueObject>;
}
export default CustomNumberValueObject;
