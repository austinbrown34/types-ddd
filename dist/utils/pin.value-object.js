"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PinValueObject = void 0;
const core_1 = require("../core");
const pin_generator_util_1 = __importDefault(require("./pin-generator.util"));
const core_2 = require("../core");
/**
 * Pin to use as email confirmation or sms
 * @example ABC-1234
 * @example 123
 * @example ABCDEF-123456
 */
class PinValueObject extends core_1.ValueObject {
    constructor(prop) {
        super(prop);
    }
    /**
     * @returns pin as string
     * @example CTF-8723
     * @example 52155
     */
    value() {
        return this.props.value;
    }
    /**
     *
     * @param props as object with params
     * @param numbersLength: 3 | 4 | 5 | 6 | 7
     * @param lettersLength: 0 | 3 | 4 | 5 | 6 | 7
     * @default numbersLength 5
     * @default lettersLength 0
     * @returns Result PinValueObject as instance
     */
    static generatePin(props) {
        const pin = (0, pin_generator_util_1.default)(props);
        return PinValueObject.create(pin);
    }
    /**
     *
     * @param value pin as string
     * @returns true if pin has a valid pattern and false if not
     */
    static isValidProps(value) {
        const minLength = 2;
        const maxLength = 16;
        const { string } = this.validator;
        return string(value).hasLengthBetween(minLength, maxLength);
    }
    validation(_key, _value) {
        const minLength = 2;
        const maxLength = 16;
        const { string } = this.validator;
        return string(_value).hasLengthBetween(minLength, maxLength);
    }
    /**
     *
     * @param pin as string
     * @returns true if provided pin match with instance value and return false if not
     */
    compare(pin) {
        return pin === this.props.value;
    }
    /**
     *
     * @description if not provide a value automatically generate a pin with 5 digits
     * @param pin as optional string @max 15 digits @min 3 digits
     * @returns Result PinValueObject as instance
     * @default 5 digits
     * @example 98537
     */
    static create(pin) {
        let value = pin !== null && pin !== void 0 ? pin : (0, pin_generator_util_1.default)();
        const isValidValue = PinValueObject.isValidProps(value);
        if (!isValidValue) {
            return core_2.Result.fail('Invalid value for a pin');
        }
        return core_2.Result.Ok(new PinValueObject({ value }));
    }
}
exports.PinValueObject = PinValueObject;
exports.default = PinValueObject;
