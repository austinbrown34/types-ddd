import { ValueObject } from '../core';
import { Result } from '../core';
interface Prop {
    value: string;
}
export declare class EmailValueObject extends ValueObject<Prop> {
    private constructor();
    value(): string;
    getNick(): string;
    getDomain(): string;
    validation(_key: any, _value: any): boolean;
    static isValidProps(email: string): boolean;
    static create(value: string): Result<EmailValueObject>;
}
export default EmailValueObject;
