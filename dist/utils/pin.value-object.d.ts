import { ValueObject } from '../core';
import { PinProps } from './pin-generator.util';
import { Result } from '../core';
interface Prop {
    value: string;
}
/**
 * Pin to use as email confirmation or sms
 * @example ABC-1234
 * @example 123
 * @example ABCDEF-123456
 */
export declare class PinValueObject extends ValueObject<Prop> {
    private constructor();
    /**
     * @returns pin as string
     * @example CTF-8723
     * @example 52155
     */
    value(): string;
    /**
     *
     * @param props as object with params
     * @param numbersLength: 3 | 4 | 5 | 6 | 7
     * @param lettersLength: 0 | 3 | 4 | 5 | 6 | 7
     * @default numbersLength 5
     * @default lettersLength 0
     * @returns Result PinValueObject as instance
     */
    static generatePin(props?: PinProps): Result<PinValueObject>;
    /**
     *
     * @param value pin as string
     * @returns true if pin has a valid pattern and false if not
     */
    static isValidProps(value: string): boolean;
    validation(_key: any, _value: any): boolean;
    /**
     *
     * @param pin as string
     * @returns true if provided pin match with instance value and return false if not
     */
    compare(pin: string): boolean;
    /**
     *
     * @description if not provide a value automatically generate a pin with 5 digits
     * @param pin as optional string @max 15 digits @min 3 digits
     * @returns Result PinValueObject as instance
     * @default 5 digits
     * @example 98537
     */
    static create(pin?: string): Result<PinValueObject>;
}
export default PinValueObject;
