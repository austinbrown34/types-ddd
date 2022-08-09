"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDecimalAsCent = void 0;
const get_integer_as_cents_util_1 = __importDefault(require("./get-integer-as-cents.util"));
const getDecimalAsCent = (n) => n * 100 - (0, get_integer_as_cents_util_1.default)(n);
exports.getDecimalAsCent = getDecimalAsCent;
exports.default = getDecimalAsCent;
