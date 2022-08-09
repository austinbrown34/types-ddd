import { ValueObject } from '../core';
import { Result } from '../core';
import { ILength } from './password-generator.util';
interface Prop {
    value: string;
}
declare class PasswordValueObject extends ValueObject<Prop> {
    constructor(props: Prop);
    /**
     * @returns value as string
     */
    value(): string;
    /**
     *
     * @description compare plainText with encrypted password
     * @param plainText plainText not encrypted to compare with encrypted password
     * @returns true if match else false
     */
    compare(plainText: string): boolean;
    /**
     *
     * @returns true if instance value is encrypted else false
     */
    isEncrypted(): boolean;
    /**
     *
     * @returns true if provided value is encrypted else false
     */
    static isEncrypted(value: string): boolean;
    /**
     *
     * @param length password length as number 8/10/12/14/16/18
     * @returns PasswordValueObject
     * @default 12 chars or greater is recommended for strongest password
     */
    static random(length?: ILength): PasswordValueObject;
    /**
     * @summary this function check if value already is encrypted. If already encrypted just returns instance.
     * @description encrypt instance value
     * @returns instance
     */
    encrypt(): PasswordValueObject;
    validation(_key: any, _value: any): boolean;
    /**
     *
     * @param value check if password has a valid value length
     * @returns true if is all ok or false else not
     */
    static isValidProps(value: string): boolean;
    /**
     *
     * @param value password to create
     * @returns Result of PasswordValueObject
     */
    static create(value: string): Result<PasswordValueObject>;
}
export { PasswordValueObject };
export default PasswordValueObject;
