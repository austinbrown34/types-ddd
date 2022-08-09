import { ValueObject } from '../core';
import { Result } from '../core';
interface Prop {
    value: string;
}
export declare class UserNameValueObject extends ValueObject<Prop> {
    private constructor();
    /**
     * @returns capitalized full name
     */
    value(): string;
    /**
     *
     * @returns instance
     */
    private capitalize;
    /**
     *
     * @returns check if has a second name
     */
    hasMiddleName(): boolean;
    /**
     *
     * @returns check if has last name `first middle last`
     */
    hasLastName(): boolean;
    /**
     *
     * @returns first name
     */
    getFirstName(): string;
    /**
     *
     * @returns middle name if it has more than 2 names, else returns a empty string
     */
    getMiddleName(): string;
    /**
     *
     * @returns last name if exists else return the name
     */
    getLastName(): string;
    /**
     * @returns initials as string
     * @example
     * for a name "Thomas A. Anderson" = "T.A.A"
     */
    getInitials(): string;
    validation(_key: any, _value: any): boolean;
    /**
     * @description check name length min(2) max(40)
     * @param value name as string
     * @returns true if provided value is valid and false if not
     */
    static isValidProps(value: string): boolean;
    static create(value: string): Result<UserNameValueObject>;
}
export default UserNameValueObject;
