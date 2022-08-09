import { ValueObject } from '../core';
import { Result } from '../core';
interface Prop {
    value: string;
}
declare class HEXColorValueObject extends ValueObject<Prop> {
    private constructor();
    value(): string;
    validation(_key: any, _value: any): boolean;
    /**
     *
     * @returns HEXColorValueObject instance with random color value
     */
    static randomColor(): HEXColorValueObject;
    /**
     *
     * @param value hex pattern as string
     * @example #ffffff
     * @returns true if pattern match else return false
     */
    static isValidProps(value: string): boolean;
    /**
     *
     * @returns rgb color
     * @example rgb(255, 255, 255)
     */
    getAsRGB(): string;
    /**
     *
     * @param value hex pattern as string
     * @example #ffffff
     * @returns Result with instance of HEXColorValueObject
     */
    static create(value: string): Result<HEXColorValueObject>;
}
export { HEXColorValueObject };
export default HEXColorValueObject;
