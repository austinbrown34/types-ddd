import { ValueObject } from '../core';
import { Result } from '../core';
interface Prop {
    value: string;
}
declare class RGBColorValueObject extends ValueObject<Prop> {
    private constructor();
    value(): string;
    validation(_key: any, _value: any): boolean;
    /**
     *
     * @param value rgb pattern as string
     * @example rgb(255, 255, 255)
     * @returns true if pattern match else return false
     */
    static isValidProps(value: string): boolean;
    /**
     *
     * @returns RGBColorValueObject instance with random color value
     */
    static randomColor(): RGBColorValueObject;
    /**
     *
     * @returns hex color
     * @example #ffffff
     */
    getAsHex(): string;
    /**
     *
     * @param value rgb pattern as string
     * @example rgb(255, 255, 255)
     * @returns Result with instance of RGBColorValueObject
     */
    static create(value: string): Result<RGBColorValueObject>;
}
export { RGBColorValueObject };
export default RGBColorValueObject;
