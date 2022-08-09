import { ValueObject } from '../core';
import { Result } from '../core';
interface Prop {
    value: string;
}
declare class UrlValueObject extends ValueObject<Prop> {
    private constructor();
    /**
     * @returns url value as string
     */
    value(): string;
    /**
     *
     * @param value url value as string
     * @example https://google.com
     * @returns true if value is a valid url and false if does not
     */
    static isValidProps(value: string): boolean;
    validation(_key: any, _value: any): boolean;
    /**
     *
     * @param value url as string
     * @example https://google.com
     * @returns Result with instance of UrlValueObject
     */
    static create(value: string): Result<UrlValueObject>;
}
export { UrlValueObject };
export default UrlValueObject;
