"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyValueObject = void 0;
const core_1 = require("../core");
const core_2 = require("../core");
const calculate_percentage_util_1 = __importDefault(require("./calculate-percentage.util"));
const convert_value_to_cent_util_1 = __importDefault(require("./convert-value-to-cent.util"));
const convert_cent_to_float_util_1 = __importDefault(require("./convert-cent-to-float.util"));
const minSafeValue = Math.floor(Number.MIN_SAFE_INTEGER / 100);
const maxSafeValue = Math.floor(Number.MAX_SAFE_INTEGER / 100);
/**
 * @property BRL Brazilian Real
 * @property USD Dollar
 * @property EUR Europe Euro
 * @property JPY Japan yen
 */
var currency;
(function (currency) {
    currency["BRL"] = "pt-BR";
    currency["USD"] = "en-US";
    currency["EUR"] = "de-DE";
    currency["JPY"] = "ja-JP";
})(currency || (currency = {}));
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
class CurrencyValueObject extends core_1.ValueObject {
    constructor(props) {
        super(props);
        this.cents = (0, convert_value_to_cent_util_1.default)(props.value);
    }
    value() {
        return this.props.value;
    }
    get currency() {
        return this.props.currency;
    }
    /**
     * @description check if provided value is safe calculation number
     * @param value number
     * @returns true if value is safe value else false
     */
    static isSafeValue(value) {
        if (typeof value !== 'number') {
            return false;
        }
        if (value < minSafeValue || value > maxSafeValue) {
            return false;
        }
        return true;
    }
    /**
     *
     * @returns a formatted currency as string `R$ 12,00`
     */
    getCoin() {
        return new Intl.NumberFormat(currency[this.currency], {
            style: 'currency',
            currency: this.currency,
        }).format(this.props.value);
    }
    /**
     *
     * @param value as number
     * @returns true if instance value is greater than provided value. else return false.
     */
    isGreaterThan(value) {
        return this.props.value > value;
    }
    /**
     *
     * @param value as number
     * @returns true if instance value is less than provided value. else return false.
     */
    isLessThan(value) {
        return this.props.value < value;
    }
    /**
     *
     * @param value as number
     * @returns true if instance value is equal to provided value. else return false.
     */
    isEqualTo(value) {
        return this.props.value === value;
    }
    /**
     * @throws MaxValue `900.719.925.474`
     * @event `update` this method may not has effect on the instance value. always check the returned result.
     * @description add instance value with provided value
     * @param value number to add
     * @returns instance of CurrencyValueObject
     */
    add(value) {
        const valueAsCent = (0, convert_value_to_cent_util_1.default)(value);
        this.cents = this.cents + valueAsCent;
        this.props.value = (0, convert_cent_to_float_util_1.default)(this.cents);
        return this;
    }
    /**
     * @event `update` this method may not has effect on the instance value. always check the returned result.
     * @description subtract instance value with provided value
     * @param value number to subtract
     * @returns instance of CurrencyValueObject
     */
    subtractBy(value) {
        const valueAsCent = (0, convert_value_to_cent_util_1.default)(value);
        this.cents = this.cents - valueAsCent;
        this.props.value = (0, convert_cent_to_float_util_1.default)(this.cents);
        return this;
    }
    /**
     * @event `update` this method may not has effect on the instance value. always check the returned result.
     * @description divide instance value with provided value
     * @param value number to divide
     * @returns instance of CurrencyValueObject
     */
    divideBy(value) {
        this.cents = this.cents / value;
        this.props.value = (0, convert_cent_to_float_util_1.default)(this.cents);
        return this;
    }
    /**
     * @throws MaxValue `900.719.925.474`
     * @event `update` this method may not has effect on the instance value. always check the returned result.
     * @description receives a value and multiply with instance value
     * @param value number to multiply
     * @returns instance of CurrencyValueObject
     */
    multiplyBy(value) {
        this.cents = this.cents * value;
        this.props.value = (0, convert_cent_to_float_util_1.default)(this.cents);
        return this;
    }
    /**
     * @throws MaxValue `900.719.925.474`
     * @event `update` this method may not has effect on the instance value. always check the returned result.
     * @description receives a percentage value and add on instance value
     * @param percent number as percentage to add on instance value
     * @returns instance of CurrencyValueObject
     */
    addPercent(percent) {
        const percentage = (0, calculate_percentage_util_1.default)(this.cents, percent);
        this.cents = this.cents + percentage;
        this.props.value = (0, convert_cent_to_float_util_1.default)(this.cents);
        return this;
    }
    /**
     * @event `update` this method may not has effect on the instance value. always check the returned result.
     * @description subtract a percentage from instance value
     * @param percent number as percentage
     * @returns instance of CurrencyValueObject
     */
    subtractPercent(percent) {
        const percentage = (0, calculate_percentage_util_1.default)(this.cents, percent);
        this.cents = this.cents - percentage;
        this.props.value = (0, convert_cent_to_float_util_1.default)(this.cents);
        return this;
    }
    /**
     *
     * @returns boolean true if instance value is positive else false
     */
    isPositive() {
        return this.cents >= 0;
    }
    validation(_key, _value) {
        const { isNumber, number, isString } = this.validator;
        const option = {
            value: (_val) => isNumber(_val) && number(_val).isSafeInteger(),
            currency: (_val) => isString(_val) && Object.keys(currency).includes(_val),
        };
        return option[_key](_value);
    }
    /**
     * @throws MaxValue `90.071.992.537.570`
     * @description the precision calculation works for up to three decimal numbers `0.000`
     * @param props object currency and value
     * @returns Result with instance of CurrencyValueObject
     */
    static create(props) {
        const isValidCurrency = Object.keys(currency).includes(props.currency);
        if (!isValidCurrency) {
            return core_2.Result.fail(`${props.currency} is an invalid currency`);
        }
        if (typeof props.value !== 'number') {
            return core_2.Result.fail(`${props.value} is not a number`);
        }
        if (!CurrencyValueObject.isSafeValue(props.value)) {
            return core_2.Result.fail(`${props.value} is not a safe number, must be between ${minSafeValue} and ${maxSafeValue}`);
        }
        return core_2.Result.Ok(new CurrencyValueObject(props));
    }
}
exports.CurrencyValueObject = CurrencyValueObject;
exports.default = CurrencyValueObject;
