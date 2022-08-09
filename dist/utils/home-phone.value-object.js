"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePhoneValueObject = void 0;
const core_1 = require("../core");
const core_2 = require("../core");
const regexHash = /^\([1-9]{2}\)\s[2-5][0-9]{3}\-[0-9]{4}$/;
const regexHashSpecialChars = /\(|\)|-|\s/g;
/**
 * @description Brazilian Home Phone Number
 * @default (XX) XXXX-XXXX
 */
class HomePhoneValueObject extends core_1.ValueObject {
    constructor(prop) {
        super(prop);
    }
    validation(_key, _value) {
        return this.validator.string(_value).match(regexHash);
    }
    /**
     *
     * @param value Phone number (XX) XXXX-XXXX
     * @returns true if pattern match and false if not.
     */
    static isValidProps(value) {
        return this.validator.string(value).match(regexHash);
    }
    /**
     * @returns value (XX) XXXX-XXXX as string
     */
    value() {
        return this.props.value;
    }
    /**
     *
     * @returns only numbers without special chars. Includes DDD.
     * @example 1122502301
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
     * @param value Brazilian home phone number
     * @example (XX) XXXX-XXXX
     * @returns Result of HomePhoneValueObject
     */
    static create(value) {
        if (!HomePhoneValueObject.isValidProps(value)) {
            return core_2.Result.fail('Invalid Home Phone Number');
        }
        return core_2.Result.Ok(new HomePhoneValueObject({ value }));
    }
}
exports.HomePhoneValueObject = HomePhoneValueObject;
exports.default = HomePhoneValueObject;
