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
exports.CNPJValueObject = void 0;
const core_1 = require("../core");
const core_2 = require("../core");
const check_cnpj_digit_util_1 = __importStar(require("./check-cnpj-digit.util"));
const regexCnpj = /^([0-9]{2})[\.]([0-9]{3})[\.]((?!\2)[0-9]{3})[\/]([0-9]{4})[-]([0-9]{2})$|^[0-9]{14}$/;
class CNPJValueObject extends core_1.ValueObject {
    constructor(props) {
        super(props);
        this.removeSpecialChars();
    }
    /**
     * @description return a cnpj value (only numbers).
     * @example example "22398345000188".
     * @summary If you want cnpj as pattern use `formatToCnpjPattern` before get value.
     */
    value() {
        return this.props.value;
    }
    /**
     * @description remove hyphen and dot from cnpj value.
     * @example before "22.398.345/0001-88"
     * @example after "22398345000188"
     */
    removeSpecialChars() {
        this.props.value = (0, check_cnpj_digit_util_1.removeSpecialCharsFromCnpj)(this.props.value);
        return this;
    }
    /**
     * @description add hyphen and dot to cnpj value.
     * @example before "22398345000188"
     * @example after "22.398.345/0001-88"
     */
    formatToCnpjPattern() {
        this.props.value = (0, check_cnpj_digit_util_1.formatValueToCnpjPattern)(this.props.value);
        return this;
    }
    /**
     *
     * @param cnpj value as string only number or pattern.
     * @returns true if cnpj match with instance value and false if not.
     * @example param "22398345000188"
     * @example param "22.398.345/0001-88"
     */
    compare(cnpj) {
        const formattedCnpj = (0, check_cnpj_digit_util_1.removeSpecialCharsFromCnpj)(cnpj);
        const instanceValue = (0, check_cnpj_digit_util_1.removeSpecialCharsFromCnpj)(this.props.value);
        return instanceValue === formattedCnpj;
    }
    /**
     * @description check if cnpj value is a valid pattern and has a valid digit sum.
     * @param value cnpj as string
     * @returns true if value is valid and false if not.
     * @example "22.398.345/0001-88"
     * @example "22398345000188"
     */
    static isValidProps(value) {
        const isValidPattern = regexCnpj.test(value);
        const isValidDigits = (0, check_cnpj_digit_util_1.default)(value);
        return isValidDigits && isValidPattern;
    }
    /**
     * @description check if cnpj value is a valid pattern and has a valid digit sum.
     * @param value cnpj as string
     * @returns true if value is valid and false if not.
     * @example "22.398.345/0001-88"
     * @example "22398345000188"
     */
    validation(_key, _value) {
        const isValidPattern = regexCnpj.test(_value);
        const isValidDigits = (0, check_cnpj_digit_util_1.default)(_value);
        return isValidDigits && isValidPattern;
    }
    /**
     * @description create a cnpj value object
     * @param value cnpj numbers as string
     * @returns instance of Result with cnpj value
     * @example "22.398.345/0001-88"
     * @example "22398345000188"
     * @summary fails if provide an invalid pattern or a cnpj with invalid digit sum
     */
    static create(value) {
        const isValidValue = CNPJValueObject.isValidProps(value);
        if (!isValidValue) {
            return core_2.Result.fail('Invalid value for cnpj');
        }
        return core_2.Result.Ok(new CNPJValueObject({ value }));
    }
}
exports.CNPJValueObject = CNPJValueObject;
exports.default = CNPJValueObject;
