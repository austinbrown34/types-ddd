"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomStringValueObject = void 0;
const core_1 = require("../core");
const core_2 = require("../core");
const defaultCustomProps = {
    VALIDATOR: function (value) {
        return typeof value === 'string';
    },
    LENGTH: {
        MAX: 255,
        MIN: 1,
    },
};
class CustomStringValueObject extends core_1.ValueObject {
    constructor(props, customProps) {
        super(props);
        this.customProps = customProps !== null && customProps !== void 0 ? customProps : defaultCustomProps;
    }
    /**
     * @returns original value as string
     */
    value() {
        return this.props.value;
    }
    /**
     * @returns value lowerCase as string
     */
    get lowerCaseValue() {
        return this.props.value.toLowerCase();
    }
    /**
     * @returns value upperCase as string
     */
    get upperCaseValue() {
        return this.props.value.toUpperCase();
    }
    /**
     * @returns value capitalized as string
     */
    get capitalizeValue() {
        return (this.props.value[0].toUpperCase() +
            this.props.value.slice(1).toLowerCase());
    }
    /**
     * @returns validation
     * @method VALIDATOR: function (value: string): boolean;
     * @property
     * LENGTH: MAX / MIN,
     * @property
     * MIN: number
     * @property
     * MAX: number
     * @default
     * MAX: 255
     * MIN: 1
     */
    get customValidation() {
        return this.customProps;
    }
    static isValidProps(value, customProps) {
        var _a, _b, _c;
        const MIN = (_a = customProps === null || customProps === void 0 ? void 0 : customProps.LENGTH.MIN) !== null && _a !== void 0 ? _a : defaultCustomProps.LENGTH.MIN;
        const MAX = (_b = customProps === null || customProps === void 0 ? void 0 : customProps.LENGTH.MAX) !== null && _b !== void 0 ? _b : defaultCustomProps.LENGTH.MAX;
        const VALIDATOR = (_c = customProps === null || customProps === void 0 ? void 0 : customProps.VALIDATOR) !== null && _c !== void 0 ? _c : defaultCustomProps.VALIDATOR;
        if (VALIDATOR) {
            return (VALIDATOR(value) && value.length >= MIN && value.length <= MAX);
        }
        return value.length >= MIN && value.length <= MAX;
    }
    static create(value, customProps) {
        const isValidValue = CustomStringValueObject.isValidProps(value, customProps);
        if (!isValidValue) {
            return core_2.Result.fail('Invalid value for a custom string');
        }
        return core_2.Result.Ok(new CustomStringValueObject({ value }, customProps));
    }
}
exports.CustomStringValueObject = CustomStringValueObject;
exports.default = CustomStringValueObject;
