import { ValueObject } from '../core';
import { Result } from '../core';
interface Prop {
    value: string;
}
/**
 * @description Brazilian Mobile Phone Number
 * @default (XX) 9XXXX-XXXX
 */
declare class MobilePhoneValueObject extends ValueObject<Prop> {
    private constructor();
    /**
     *
     * @param value Phone number (XX) 9XXXX-XXXX
     * @returns true if pattern match and false if not.
     */
    static isValidProps(value: string): boolean;
    validation(_key: any, _value: any): boolean;
    /**
     * @returns value (XX) 9XXXX-XXXX as string
     */
    value(): string;
    /**
     *
     * @returns only numbers without special chars. Includes DDD.
     * @example 11992502301
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
     * @param value Brazilian Mobile phone number
     * @example (XX) 9XXXX-XXXX
     * @returns Result of MobilePhoneValueObject
     */
    static create(value: string): Result<MobilePhoneValueObject>;
}
export { MobilePhoneValueObject };
export default MobilePhoneValueObject;
