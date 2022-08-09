import { ValueObject } from '../core';
import { Result } from '../core';
interface Prop {
    value: string;
}
export declare class CNPJValueObject extends ValueObject<Prop> {
    private constructor();
    /**
     * @description return a cnpj value (only numbers).
     * @example example "22398345000188".
     * @summary If you want cnpj as pattern use `formatToCnpjPattern` before get value.
     */
    value(): string;
    /**
     * @description remove hyphen and dot from cnpj value.
     * @example before "22.398.345/0001-88"
     * @example after "22398345000188"
     */
    removeSpecialChars(): CNPJValueObject;
    /**
     * @description add hyphen and dot to cnpj value.
     * @example before "22398345000188"
     * @example after "22.398.345/0001-88"
     */
    formatToCnpjPattern(): CNPJValueObject;
    /**
     *
     * @param cnpj value as string only number or pattern.
     * @returns true if cnpj match with instance value and false if not.
     * @example param "22398345000188"
     * @example param "22.398.345/0001-88"
     */
    compare(cnpj: string): boolean;
    /**
     * @description check if cnpj value is a valid pattern and has a valid digit sum.
     * @param value cnpj as string
     * @returns true if value is valid and false if not.
     * @example "22.398.345/0001-88"
     * @example "22398345000188"
     */
    static isValidProps(value: string): boolean;
    /**
     * @description check if cnpj value is a valid pattern and has a valid digit sum.
     * @param value cnpj as string
     * @returns true if value is valid and false if not.
     * @example "22.398.345/0001-88"
     * @example "22398345000188"
     */
    validation(_key: any, _value: string): boolean;
    /**
     * @description create a cnpj value object
     * @param value cnpj numbers as string
     * @returns instance of Result with cnpj value
     * @example "22.398.345/0001-88"
     * @example "22398345000188"
     * @summary fails if provide an invalid pattern or a cnpj with invalid digit sum
     */
    static create(value: string): Result<CNPJValueObject>;
}
export default CNPJValueObject;
