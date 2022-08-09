"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUndefinedKeysAsArray = void 0;
/**
 *
 * @param params object and boolean to check or not nullable value
 * @returns array with undefined keys
 * @example
 *
 * const user = {
 *    name: "user name",
 *    age: undefined
 * }
 *
 * const result = getUndefinedKeysAsArray(user);
 *
 * console.log(result);
 * > [ "age" ]
 *
 *
 * ...
 *
 * @description
 * You also can get null keys
 *
 * @example
 *
 * const user = {
 *    name: "user name",
 *    age: undefined,
 *    isMarried: null
 * }
 *
 * const result = getUndefinedKeysAsArray(user, { includesNull: true });
 *
 * console.log(result);
 * > [ "age", "isMarried" ]
 *
 *
 * ...
 */
const getUndefinedKeysAsArray = (params) => {
    var _a;
    const undefinedKeys = [];
    const keys = Object.keys((_a = params === null || params === void 0 ? void 0 : params.object) !== null && _a !== void 0 ? _a : {});
    const ignoreSubObj = typeof (params === null || params === void 0 ? void 0 : params.ignoreSubObject) === 'undefined'
        ? false
        : params.ignoreSubObject;
    if (keys.length < 1) {
        return [];
    }
    for (const key of keys) {
        const objKey = key;
        if (typeof params.object[objKey] === 'undefined' ||
            (params.object[objKey] === null && params.includesNull)) {
            undefinedKeys.push(key);
        }
        else if (typeof params.object[objKey] === 'object' &&
            ignoreSubObj === false) {
            const isArray = Array.isArray(params.object[objKey]);
            if (!isArray) {
                const subUndefinedKeys = getUndefinedKeysAsArray({
                    includesNull: params.includesNull,
                    object: params.object[objKey],
                });
                subUndefinedKeys.map((undefinedKey) => undefinedKeys.push(`${key}.${undefinedKey}`));
            }
        }
    }
    return undefinedKeys;
};
exports.getUndefinedKeysAsArray = getUndefinedKeysAsArray;
exports.default = getUndefinedKeysAsArray;
