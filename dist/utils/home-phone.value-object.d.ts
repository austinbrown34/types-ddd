import { ValueObject } from '../core';
import { Result } from '../core';
interface Prop {
    value: string;
}
/**
 * @description Brazilian Home Phone Number
 * @default (XX) XXXX-XXXX
 */
declare class HomePhoneValueObject extends ValueObject<Prop> {
    private constructor();
    validation(_key: any, _value: any): boolean;
    /**
     *
     * @param value Phone number (XX) XXXX-XXXX
     * @returns true if pattern match and false if not.
     */
    static isValidProps(value: string): boolean;
    /**
     * @returns value (XX) XXXX-XXXX as string
     */
    value(): string;
    /**
     *
     * @returns only numbers without special chars. Includes DDD.
     * @example 1122502301
     */
    getOnlyNumbers(): number;
    /**
     *
     * @returns DDD only as number
     * @example 11
     */
    getDDD(): number;
    /**
     *
     * @param value Brazilian home phone number
     * @example (XX) XXXX-XXXX
     * @returns Result of HomePhoneValueObject
     */
    static create(value: string): Result<HomePhoneValueObject>;
}
export { HomePhoneValueObject };
export default HomePhoneValueObject;
