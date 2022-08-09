"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CPFValueObject = void 0;
const core_1 = require("../core");
const core_2 = require("../core");
const check_cpf_digit_util_1 = __importStar(require("./check-cpf-digit.util"));
const regexCpf = /^([0-9]{3})[\.]((?!\1)[0-9]{3})[\.]([0-9]{3})[-]([0-9]{2})$|^[0-9]{11}$/;
class CPFValueObject extends core_1.ValueObject {
    constructor(props) {
        super(props);
        this.removeSpecialChars();
    }
    /**
     * @description return a cpf value (only numbers).
     * @example example "52734865211".
     * @summary If you want cpf as pattern use `formatToCpfPattern` before get value.
     */
    value() {
        return this.props.value;
    }
    /**
     * @description remove hyphen and dot from cpf value.
     * @example before "527.348.652-11"
     * @example after "52734865211"
     */
    removeSpecialChars() {
        this.props.value = (0, check_cpf_digit_util_1.removeSpecialCharsFromCpf)(this.props.value);
        return this;
    }
    /**
     * @description add hyphen and dot to cpf value.
     * @example before "52734865211"
     * @example after "527.348.652-11"
     */
    formatToCpfPattern() {
        this.props.value = (0, check_cpf_digit_util_1.formatValueToCpfPattern)(this.props.value);
        return this;
    }
    /**
     *
     * @param cpf value as string only number or pattern.
     * @returns true if cpf match with instance value and false if not.
     * @example param "52734865211"
     * @example param "527.348.652-11"
     */
    compare(cpf) {
        const formattedCpf = (0, check_cpf_digit_util_1.removeSpecialCharsFromCpf)(cpf);
        const instanceValue = (0, check_cpf_digit_util_1.removeSpecialCharsFromCpf)(this.props.value);
        return instanceValue === formattedCpf;
    }
    /**
     * @description check if cpf value is a valid pattern and has a valid digit sum.
     * @param value cpf as string
     * @returns true if value is valid and false if not.
     * @example "527.348.652-11"
     * @example "72725477824"
     */
    static isValidProps(value) {
        const isValidPattern = regexCpf.test(value);
        const isValidDigits = (0, check_cpf_digit_util_1.default)(value);
        return isValidDigits && isValidPattern;
    }
    /**
     * @description check if cpf value is a valid pattern and has a valid digit sum.
     * @param value cpf as string
     * @returns true if value is valid and false if not.
     * @example "527.348.652-11"
     * @example "72725477824"
     */
    validation(_key, _value) {
        const isValidPattern = regexCpf.test(_value);
        const isValidDigits = (0, check_cpf_digit_util_1.default)(_value);
        return isValidDigits && isValidPattern;
    }
    /**
     * @description create a cpf value object
     * @param value cpf numbers as string
     * @returns instance of Result with cpf value
     * @example "527.348.652-11"
     * @example "72725477824"
     * @summary fails if provide an invalid pattern or a cpf with invalid digit sum
     */
    static create(value) {
        const isValidValue = CPFValueObject.isValidProps(value);
        if (!isValidValue) {
            return core_2.Result.fail('Invalid value for cpf');
        }
        return core_2.Result.Ok(new CPFValueObject({ value }));
    }
}
exports.CPFValueObject = CPFValueObject;
exports.default = CPFValueObject;
