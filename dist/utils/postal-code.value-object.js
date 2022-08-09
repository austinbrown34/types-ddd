"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostalCodeValueObject = void 0;
const core_1 = require("../core");
const core_2 = require("../core");
const regexHash = /^[0-9]{5}-[0-9]{3}$|^[0-9]{8}$/;
class PostalCodeValueObject extends core_1.ValueObject {
    constructor(prop) {
        super(prop);
    }
    /**
     * @returns value as string. always only numbers
     * @example 75520140
     */
    value() {
        return this.props.value.replace(/-/g, '');
    }
    validation(_key, _value) {
        return this.validator.string(_value).match(regexHash);
    }
    /**
     *
     * @param value PostalCode as string
     * @returns true if value match with pattern and false if do not.
     */
    static isValidValue(value) {
        return this.validator.string(value).match(regexHash);
    }
    static create(value) {
        if (!PostalCodeValueObject.isValidValue(value)) {
            return core_2.Result.fail('Invalid postal code');
        }
        return core_2.Result.Ok(new PostalCodeValueObject({ value }));
    }
}
exports.PostalCodeValueObject = PostalCodeValueObject;
exports.default = PostalCodeValueObject;
