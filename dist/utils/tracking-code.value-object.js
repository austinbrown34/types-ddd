"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackingCodeValueObject = void 0;
const core_1 = require("../core");
const core_2 = require("../core");
const generate_random_tracking_code_util_1 = __importDefault(require("./generate-random-tracking-code.util"));
const regexHash = /^[0-9|A-Z]{3}-[\w]{1}[0-9]{5}-[0-9]{4}$/;
class TrackingCodeValueObject extends core_1.ValueObject {
    constructor(props) {
        super(props);
    }
    /**
     * @returns value as string
     */
    value() {
        return this.props.value;
    }
    /**
     *
     * @returns tracking code as string
     */
    static generate() {
        return (0, generate_random_tracking_code_util_1.default)();
    }
    /**
     *
     * @param code value as string
     * @returns true if code match with pattern or false if not
     * @pattern
     * XXX-A99999-9999
     */
    static isValidProps(code) {
        return this.validator.string(code).match(regexHash);
    }
    validation(_key, _value) {
        return this.validator.string(_value).match(regexHash);
    }
    /**
     * @description generate a random tracking code.
     * The value is optional. If you not provide a new one will be generated.
     * @param code optional
     * @returns Result of TrackingCode
     * @pattern
     * XXX-A99999-9999
     */
    static create(code) {
        const value = code !== null && code !== void 0 ? code : TrackingCodeValueObject.generate();
        if (code) {
            if (!TrackingCodeValueObject.isValidProps(code)) {
                return core_2.Result.fail('Invalid value for Tracking code');
            }
        }
        return core_2.Result.Ok(new TrackingCodeValueObject({ value }));
    }
}
exports.TrackingCodeValueObject = TrackingCodeValueObject;
exports.default = TrackingCodeValueObject;
