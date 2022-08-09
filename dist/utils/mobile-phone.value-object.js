"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobilePhoneValueObject = void 0;
const core_1 = require("../core");
const core_2 = require("../core");
const regexHash = /^\([1-9]{2}\)\s[9](?!\d(?:(\d)\1{2})-(\d)\1{3})[5-9][0-9]{3}\-[0-9]{4}$/;
const regexHashSpecialChars = /\(|\)|-|\s/g;
/**
 * @description Brazilian Mobile Phone Number
 * @default (XX) 9XXXX-XXXX
 */
class MobilePhoneValueObject extends core_1.ValueObject {
    constructor(prop) {
        super(prop);
    }
    /**
     *
     * @param value Phone number (XX) 9XXXX-XXXX
     * @returns true if pattern match and false if not.
     */
    static isValidProps(value) {
        return this.validator.string(value).match(regexHash);
    }
    validation(_key, _value) {
        return this.validator.string(_value).match(regexHash);
    }
    /**
     * @returns value (XX) 9XXXX-XXXX as string
     */
    value() {
        return this.props.value;
    }
    /**
     *
     * @returns only numbers without special chars. Includes DDD.
     * @example 11992502301
     */
    getOnlyNumbers() {
        const onlyNumbersAsString = this.props.value.replace(regexHashSpecialChars, '');
        return parseInt(onlyNumbersAsString);
    }
    /**
     *
     * @returns DDD only as number
     * @example 11
     */
    getDDD() {
        return parseInt(this.props.value.slice(1, 3));
    }
    /**
     *
     * @param value Brazilian Mobile phone number
     * @example (XX) 9XXXX-XXXX
     * @returns Result of MobilePhoneValueObject
     */
    static create(value) {
        if (!MobilePhoneValueObject.isValidProps(value)) {
            return core_2.Result.fail('Invalid Mobile Phone Number');
        }
        return core_2.Result.Ok(new MobilePhoneValueObject({ value }));
    }
}
exports.MobilePhoneValueObject = MobilePhoneValueObject;
exports.default = MobilePhoneValueObject;
