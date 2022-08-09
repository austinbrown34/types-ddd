"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RGBColorValueObject = void 0;
const core_1 = require("../core");
const core_2 = require("../core");
const color_converter_util_1 = __importDefault(require("./color-converter.util"));
const color_generator_util_1 = __importDefault(require("./color-generator.util"));
const regexHash = /^rgb\((\d{1,2}|(0|1)\d{2}|2[0-4]\d|25[0-5])\,\s(\d{1,2}|(0|1)\d{2}|2[0-4]\d|25[0-5])\,\s(\d{1,2}|(0|1)\d{2}|2[0-4]\d|25[0-5])\)/;
class RGBColorValueObject extends core_1.ValueObject {
    constructor(prop) {
        super(prop);
    }
    value() {
        return this.props.value;
    }
    validation(_key, _value) {
        return this.validator.string(_value).match(regexHash);
    }
    /**
     *
     * @param value rgb pattern as string
     * @example rgb(255, 255, 255)
     * @returns true if pattern match else return false
     */
    static isValidProps(value) {
        return this.validator.string(value).match(regexHash);
    }
    /**
     *
     * @returns RGBColorValueObject instance with random color value
     */
    static randomColor() {
        const rgbColor = color_generator_util_1.default.randomRGB();
        return new RGBColorValueObject({ value: rgbColor });
    }
    /**
     *
     * @returns hex color
     * @example #ffffff
     */
    getAsHex() {
        return color_converter_util_1.default.RGBToHEX(this.props.value);
    }
    /**
     *
     * @param value rgb pattern as string
     * @example rgb(255, 255, 255)
     * @returns Result with instance of RGBColorValueObject
     */
    static create(value) {
        if (!RGBColorValueObject.isValidProps(value)) {
            return core_2.Result.fail('Invalid rgb value. It must match with pattern rgb(255, 255, 255)');
        }
        return core_2.Result.Ok(new RGBColorValueObject({ value }));
    }
}
exports.RGBColorValueObject = RGBColorValueObject;
exports.default = RGBColorValueObject;
