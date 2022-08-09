"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlValueObject = void 0;
const core_1 = require("../core");
const core_2 = require("../core");
const regexHash = /^\w{3,5}:\/{1,}\w{1,}\.\w*\.?\w{2,}/;
class UrlValueObject extends core_1.ValueObject {
    constructor(prop) {
        super(prop);
    }
    /**
     * @returns url value as string
     */
    value() {
        return this.props.value;
    }
    /**
     *
     * @param value url value as string
     * @example https://google.com
     * @returns true if value is a valid url and false if does not
     */
    static isValidProps(value) {
        return this.validator.string(value).match(regexHash);
    }
    validation(_key, _value) {
        return this.validator.string(_value).match(regexHash);
    }
    /**
     *
     * @param value url as string
     * @example https://google.com
     * @returns Result with instance of UrlValueObject
     */
    static create(value) {
        if (!UrlValueObject.isValidProps(value)) {
            return core_2.Result.fail('Invalid url value');
        }
        return core_2.Result.Ok(new UrlValueObject({ value }));
    }
}
exports.UrlValueObject = UrlValueObject;
exports.default = UrlValueObject;
