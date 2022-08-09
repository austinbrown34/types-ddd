import { ValueObject } from '../core';
import { Result } from '../core';
interface ICustomStringLength {
    MAX: number;
    MIN: number;
}
export interface ICustomStrValidator {
    (value: string): boolean;
}
export interface CustomStrProps {
    LENGTH: ICustomStringLength;
    VALIDATOR?: ICustomStrValidator;
}
interface Prop {
    value: string;
}
export declare class CustomStringValueObject extends ValueObject<Prop> {
    private readonly customProps;
    private constructor();
    /**
     * @returns original value as string
     */
    value(): string;
    /**
     * @returns value lowerCase as string
     */
    get lowerCaseValue(): string;
    /**
     * @returns value upperCase as string
     */
    get upperCaseValue(): string;
    /**
     * @returns value capitalized as string
     */
    get capitalizeValue(): string;
    /**
     * @returns validation
     * @method VALIDATOR: function (value: string): boolean;
     * @property
     * LENGTH: MAX / MIN,
     * @property
     * MIN: number
     * @property
     * MAX: number
     * @default
     * MAX: 255
     * MIN: 1
     */
    get customValidation(): CustomStrProps;
    static isValidProps(value: string, customProps?: CustomStrProps): boolean;
    static create(value: string, customProps?: CustomStrProps): Result<CustomStringValueObject>;
}
export default CustomStringValueObject;
