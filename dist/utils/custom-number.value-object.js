"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomNumberValueObject = void 0;
const core_1 = require("../core");
const core_2 = require("../core");
const defaultCustomProps = {
    VALIDATOR: function (value) {
        return typeof value === 'number';
    },
    MAX: Number.MAX_SAFE_INTEGER,
    MIN: Number.MIN_SAFE_INTEGER,
};
class CustomNumberValueObject extends core_1.ValueObject {
    constructor(props, customProps) {
        super(props);
        this.customProps = customProps !== null && customProps !== void 0 ? customProps : defaultCustomProps;
    }
    /**
     * @returns original value as number
     */
    value() {
        return this.props.value;
    }
    /**
     * @description return true if value is positive and false if not.
     * @returns boolean
     */
    get isPositive() {
        return this.props.value >= 0;
    }
    /**
     *
     * @param value as number
     * @returns true if instance value is greater than provided value and false if not.
     */
    isGreaterThan(value) {
        return this.props.value > value;
    }
    /**
     *
     * @param value as number
     * @returns
     */
    isEqualTo(value) {
        return this.props.value === value;
    }
    /**
     * @returns validation
     * @method VALIDATOR: function (value: number): boolean;
     * @property
     * MAX: Number.MAX_SAFE_INTEGER,
     * @property
     * MIN: Number.MIN_SAFE_INTEGER,
     */
    get customValidation() {
        return this.customProps;
    }
    /**
     *
     * @param value number
     * @param customProps @see CustomNmbProps
     * @returns boolean
     */
    static isValidValue(value, customProps) {
        var _a, _b, _c;
        const MAX = (_a = customProps === null || customProps === void 0 ? void 0 : customProps.MAX) !== null && _a !== void 0 ? _a : defaultCustomProps.MAX;
        const MIN = (_b = customProps === null || customProps === void 0 ? void 0 : customProps.MIN) !== null && _b !== void 0 ? _b : defaultCustomProps.MIN;
        const VALIDATOR = (_c = customProps === null || customProps === void 0 ? void 0 : customProps.VALIDATOR) !== null && _c !== void 0 ? _c : defaultCustomProps.VALIDATOR;
        if (VALIDATOR && MAX && MIN) {
            return VALIDATOR(value) && value >= MIN && value <= MAX;
        }
        return (value >= Number.MIN_SAFE_INTEGER && value <= Number.MAX_SAFE_INTEGER);
    }
    static create(value, customProps) {
        const isValidValue = CustomNumberValueObject.isValidValue(value, customProps);
        if (!isValidValue) {
            return core_2.Result.fail('Invalid value for a custom number');
        }
        return core_2.Result.Ok(new CustomNumberValueObject({ value }, customProps));
    }
}
exports.CustomNumberValueObject = CustomNumberValueObject;
exports.default = CustomNumberValueObject;
