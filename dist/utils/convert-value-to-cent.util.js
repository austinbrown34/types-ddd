"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertValueToCent = void 0;
const get_decimal_as_cent_util_1 = __importDefault(require("./get-decimal-as-cent.util"));
const get_integer_as_cents_util_1 = __importDefault(require("./get-integer-as-cents.util"));
const transform_value_to_money_util_1 = __importDefault(require("./transform-value-to-money.util"));
const convertValueToCent = (n) => {
    const value = (0, get_integer_as_cents_util_1.default)((0, transform_value_to_money_util_1.default)(n)) +
        (0, get_decimal_as_cent_util_1.default)((0, transform_value_to_money_util_1.default)(n));
    const monetary = parseFloat(value.toFixed(3));
    return monetary;
};
exports.convertValueToCent = convertValueToCent;
exports.default = convertValueToCent;
