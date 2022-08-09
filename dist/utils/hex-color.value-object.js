"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HEXColorValueObject = void 0;
const core_1 = require("../core");
const core_2 = require("../core");
const color_converter_util_1 = __importDefault(require("./color-converter.util"));
const color_generator_util_1 = __importDefault(require("./color-generator.util"));
const regexHash = /^([#])([0-9|a-f]{2})([0-9|a-f]{1,2})([0-9|a-f]{1,2})/;
class HEXColorValueObject extends core_1.ValueObject {
    constructor(prop) {
        super(prop);
    }
    value() {
        return this.props.value.toLowerCase();
    }
    validation(_key, _value) {
        return this.validator.string(_value).match(regexHash);
    }
    /**
     *
     * @returns HEXColorValueObject instance with random color value
     */
    static randomColor() {
        const hexColor = color_generator_util_1.default.randomHEX();
        return new HEXColorValueObject({ value: hexColor });
    }
    /**
     *
     * @param value hex pattern as string
     * @example #ffffff
     * @returns true if pattern match else return false
     */
    static isValidProps(value) {
        const upper = value.toLowerCase();
        return regexHash.test(upper);
    }
    /**
     *
     * @returns rgb color
     * @example rgb(255, 255, 255)
     */
    getAsRGB() {
        return color_converter_util_1.default.HEXToRGB(this.props.value);
    }
    /**
     *
     * @param value hex pattern as string
     * @example #ffffff
     * @returns Result with instance of HEXColorValueObject
     */
    static create(value) {
        if (!HEXColorValueObject.isValidProps(value)) {
            return core_2.Result.fail('Invalid hex value. It must match with pattern #ffffff');
        }
        return core_2.Result.Ok(new HEXColorValueObject({ value }));
    }
}
exports.HEXColorValueObject = HEXColorValueObject;
exports.default = HEXColorValueObject;
