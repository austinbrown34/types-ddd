import { ValueObject } from '../core';
import { Result } from '../core';
interface Prop {
    value: string;
}
declare class PostalCodeValueObject extends ValueObject<Prop> {
    private constructor();
    /**
     * @returns value as string. always only numbers
     * @example 75520140
     */
    value(): string;
    validation(_key: any, _value: any): boolean;
    /**
     *
     * @param value PostalCode as string
     * @returns true if value match with pattern and false if do not.
     */
    static isValidValue(value: string): boolean;
    static create(value: string): Result<PostalCodeValueObject>;
}
export { PostalCodeValueObject };
export default PostalCodeValueObject;
