import { ValueObject } from '../core';
import { Result } from '../core';
interface Prop {
    value: string;
}
export declare class CPFValueObject extends ValueObject<Prop> {
    private constructor();
    /**
     * @description return a cpf value (only numbers).
     * @example example "52734865211".
     * @summary If you want cpf as pattern use `formatToCpfPattern` before get value.
     */
    value(): string;
    /**
     * @description remove hyphen and dot from cpf value.
     * @example before "527.348.652-11"
     * @example after "52734865211"
     */
    removeSpecialChars(): CPFValueObject;
    /**
     * @description add hyphen and dot to cpf value.
     * @example before "52734865211"
     * @example after "527.348.652-11"
     */
    formatToCpfPattern(): CPFValueObject;
    /**
     *
     * @param cpf value as string only number or pattern.
     * @returns true if cpf match with instance value and false if not.
     * @example param "52734865211"
     * @example param "527.348.652-11"
     */
    compare(cpf: string): boolean;
    /**
     * @description check if cpf value is a valid pattern and has a valid digit sum.
     * @param value cpf as string
     * @returns true if value is valid and false if not.
     * @example "527.348.652-11"
     * @example "72725477824"
     */
    static isValidProps(value: string): boolean;
    /**
     * @description check if cpf value is a valid pattern and has a valid digit sum.
     * @param value cpf as string
     * @returns true if value is valid and false if not.
     * @example "527.348.652-11"
     * @example "72725477824"
     */
    validation(_key: any, _value: string): boolean;
    /**
     * @description create a cpf value object
     * @param value cpf numbers as string
     * @returns instance of Result with cpf value
     * @example "527.348.652-11"
     * @example "72725477824"
     * @summary fails if provide an invalid pattern or a cpf with invalid digit sum
     */
    static create(value: string): Result<CPFValueObject>;
}
export default CPFValueObject;
