import { ValueObject } from '../core';
import { Result } from '../core';
/**
 * @property BRL Brazilian Real
 * @property USD Dollar
 * @property EUR Europe Euro
 * @property JPY Japan yen
 */
declare enum currency {
    BRL = "pt-BR",
    USD = "en-US",
    EUR = "de-DE",
    JPY = "ja-JP"
}
export declare type ICurrency = keyof typeof currency;
/**
 * @param value as number
 * @param currency as `BRL` `USD` `EUR` `JPY`
 * @property BRL = Brazilian Real
 * @property USD = American Dollar
 * @property EUR = Europe Euro
 * @property JPY = Japan Yen
 * @example
 * { value: 200, currency: 'BRL' }
 *
 */
interface Prop {
    value: number;
    currency: ICurrency;
}
/**
 * @throws MaxValue `90.071.992.537.570`
 * @description Domain Value Object to financial operation
 * @param object `{ value: number, currency: string }`
 * @method create `new instance`
 * @method get value `number`
 * @method get currency `string`
 * @method isSafeValue `boolean`
 * @method getCurrencyString `string`
 * @method add `void`
 * @method divideBy `void`
 * @method subtractBy `void`
 * @method multiplyBy `void`
 * @method addPercent `void`
 * @method subtractPercent `void`
 * @method isPositive `boolean`
 */
declare class CurrencyValueObject extends ValueObject<Prop> {
    private cents;
    private constructor();
    value(): number;
    get currency(): ICurrency;
    /**
     * @description check if provided value is safe calculation number
     * @param value number
     * @returns true if value is safe value else false
     */
    static isSafeValue(value: number): boolean;
    /**
     *
     * @returns a formatted currency as string `R$ 12,00`
     */
    getCoin(): string;
    /**
     *
     * @param value as number
     * @returns true if instance value is greater than provided value. else return false.
     */
    isGreaterThan(value: number): boolean;
    /**
     *
     * @param value as number
     * @returns true if instance value is less than provided value. else return false.
     */
    isLessThan(value: number): boolean;
    /**
     *
     * @param value as number
     * @returns true if instance value is equal to provided value. else return false.
     */
    isEqualTo(value: number): boolean;
    /**
     * @throws MaxValue `900.719.925.474`
     * @event `update` this method may not has effect on the instance value. always check the returned result.
     * @description add instance value with provided value
     * @param value number to add
     * @returns instance of CurrencyValueObject
     */
    add(value: number): CurrencyValueObject;
    /**
     * @event `update` this method may not has effect on the instance value. always check the returned result.
     * @description subtract instance value with provided value
     * @param value number to subtract
     * @returns instance of CurrencyValueObject
     */
    subtractBy(value: number): CurrencyValueObject;
    /**
     * @event `update` this method may not has effect on the instance value. always check the returned result.
     * @description divide instance value with provided value
     * @param value number to divide
     * @returns instance of CurrencyValueObject
     */
    divideBy(value: number): CurrencyValueObject;
    /**
     * @throws MaxValue `900.719.925.474`
     * @event `update` this method may not has effect on the instance value. always check the returned result.
     * @description receives a value and multiply with instance value
     * @param value number to multiply
     * @returns instance of CurrencyValueObject
     */
    multiplyBy(value: number): CurrencyValueObject;
    /**
     * @throws MaxValue `900.719.925.474`
     * @event `update` this method may not has effect on the instance value. always check the returned result.
     * @description receives a percentage value and add on instance value
     * @param percent number as percentage to add on instance value
     * @returns instance of CurrencyValueObject
     */
    addPercent(percent: number): CurrencyValueObject;
    /**
     * @event `update` this method may not has effect on the instance value. always check the returned result.
     * @description subtract a percentage from instance value
     * @param percent number as percentage
     * @returns instance of CurrencyValueObject
     */
    subtractPercent(percent: number): CurrencyValueObject;
    /**
     *
     * @returns boolean true if instance value is positive else false
     */
    isPositive(): boolean;
    validation(_key: any, _value: any): boolean;
    /**
     * @throws MaxValue `90.071.992.537.570`
     * @description the precision calculation works for up to three decimal numbers `0.000`
     * @param props object currency and value
     * @returns Result with instance of CurrencyValueObject
     */
    static create(props: Prop): Result<CurrencyValueObject>;
}
export { CurrencyValueObject };
export default CurrencyValueObject;
