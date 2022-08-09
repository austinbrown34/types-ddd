"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeUndefinedKeysFromObject = void 0;
const canAdd = (param) => {
    const { value, includesEmptyString } = param;
    return ((value !== undefined &&
        includesEmptyString === false &&
        value !== null) ||
        (value !== '' &&
            value !== undefined &&
            includesEmptyString === true &&
            value !== null));
};
/**
 * @description This function removes keys that has undefined/null or empty string value
 * @field null value is considered as undefined
 * @param param Params as Object
 * @example
 * {
 *      object: T;
 *      includesEmptyString?: boolean;
 *      ignoreSubObject?: boolean;
 * }
 * @returns Partial provided object without undefined keys
 * @default includesEmptyString false
 * @default ignoreSubObject false
 * @default object {}
 *
 * @example
 *
 * const obj = {
 *		id: 1,
 *		name: undefined,
 *		age: null,
 *		profile: undefined,
 *		empty: '',
 *	};
 *
 *
 *	const result = removeUndefinedKeysFromObject({ object: obj });
 *  console.log(result);
 *	> { id: 1, empty: "" }
 *
 *
 *
 * ...
 */
const removeUndefinedKeysFromObject = (param) => {
    var _a;
    //
    let result = {};
    const keys = Object.keys((_a = param === null || param === void 0 ? void 0 : param.object) !== null && _a !== void 0 ? _a : {});
    //
    if (keys.length < 1) {
        return {};
    }
    const includesEmptyString = (param === null || param === void 0 ? void 0 : param.includesEmptyString) !== undefined
        ? param.includesEmptyString
        : false;
    const ignoreSubObject = (param === null || param === void 0 ? void 0 : param.ignoreSubObject) !== undefined ? param.ignoreSubObject : false;
    for (const key of keys) {
        const value = param.object[key];
        const isDate = value instanceof Date;
        if (typeof value === 'object' && !isDate) {
            const isArray = Array.isArray(value);
            if (!isArray && ignoreSubObject === false) {
                const subObjectResult = (0, exports.removeUndefinedKeysFromObject)(Object.assign(Object.assign({}, param), { object: value }));
                const subObject = { [key]: Object.assign({}, subObjectResult) };
                const resultKeys = Object.keys(subObjectResult).length > 0;
                if (resultKeys) {
                    result = Object.assign({}, Object.assign({}, result), Object.assign({}, subObject));
                }
                continue;
            }
            else if (isArray) {
                // Add Array
                result = Object.assign({}, Object.assign({}, result), { [key]: value });
            }
            else if (!isArray && ignoreSubObject === true) {
                // Ignore subObject. just added value
                result = Object.assign({}, Object.assign({}, result), { [key]: value });
            }
        }
        else if (canAdd({ value, includesEmptyString })) {
            result = Object.assign({}, Object.assign({}, result), { [key]: value });
        }
    }
    return result;
};
exports.removeUndefinedKeysFromObject = removeUndefinedKeysFromObject;
exports.default = exports.removeUndefinedKeysFromObject;
