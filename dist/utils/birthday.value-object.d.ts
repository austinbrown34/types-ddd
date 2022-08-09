import { ValueObject } from '../core';
import { Result } from '../core';
interface Prop {
    value: Date;
}
export declare class BirthdayValueObject extends ValueObject<Prop> {
    private readonly ONE_YEAR;
    private constructor();
    /**
     * @returns the birthday date
     */
    value(): Date;
    /**
     * @description this method round the age
     * @returns age as number
     */
    getAgeAsYearsOld(): number;
    /**
     *
     * @param age as number
     * @returns true if instance value is greater than provided value else return false
     */
    isAgeGreaterThan(age: number): boolean;
    /**
     *
     * @param age as number
     * @returns true if instance value is equal to provided value else return false
     */
    isAgeEqualTo(age: number): boolean;
    /**
     *
     * @param date birthday as Date
     * @returns true if is a valid age for a human
     */
    static isValidValue(date: Date): boolean;
    static create(value: Date): Result<BirthdayValueObject>;
}
export default BirthdayValueObject;
