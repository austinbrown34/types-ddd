"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformValueToMoney = void 0;
const transformValueToMoney = (n) => parseFloat(n.toFixed(3));
exports.transformValueToMoney = transformValueToMoney;
exports.default = transformValueToMoney;
