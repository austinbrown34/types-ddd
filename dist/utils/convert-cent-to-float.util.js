"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertValueToFloat = void 0;
const convertCentToFloat = (n) => parseFloat((n / 100).toFixed(3));
exports.convertValueToFloat = convertCentToFloat;
exports.default = convertCentToFloat;
