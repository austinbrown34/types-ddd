import { ValueObject } from '../core';
import { Result } from '../core';
interface OrderIdProps {
    value: string;
}
declare class TrackingCodeValueObject extends ValueObject<OrderIdProps> {
    private constructor();
    /**
     * @returns value as string
     */
    value(): string;
    /**
     *
     * @returns tracking code as string
     */
    static generate(): string;
    /**
     *
     * @param code value as string
     * @returns true if code match with pattern or false if not
     * @pattern
     * XXX-A99999-9999
     */
    static isValidProps(code: string): boolean;
    validation(_key: any, _value: any): boolean;
    /**
     * @description generate a random tracking code.
     * The value is optional. If you not provide a new one will be generated.
     * @param code optional
     * @returns Result of TrackingCode
     * @pattern
     * XXX-A99999-9999
     */
    static create(code?: string): Result<TrackingCodeValueObject>;
}
export { TrackingCodeValueObject };
export default TrackingCodeValueObject;
