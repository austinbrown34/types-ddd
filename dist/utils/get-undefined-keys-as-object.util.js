"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUndefinedKeysAsObject = void 0;
const get_undefined_keys_as_array_util_1 = __importDefault(require("./get-undefined-keys-as-array.util"));
var IApplyValue;
(function (IApplyValue) {
    IApplyValue["empty"] = "empty";
    IApplyValue["null"] = "null";
    IApplyValue["undefined"] = "undefined";
    IApplyValue["zero"] = "zero";
    IApplyValue["one"] = "one";
    IApplyValue["true"] = "true";
    IApplyValue["false"] = "false";
})(IApplyValue || (IApplyValue = {}));
const ValuesKey = {
    empty: '',
    null: null,
    undefined: undefined,
    zero: 0,
    one: 1,
    true: true,
    false: false,
};
/**
 *
 * @param object Object as target to check keys
 * @param includesNull as boolean. if true all nullable values will be considered as undefined.
 * @param applyKeyValue as value to be applied to key. empty string / null / undefined / zero. default empty string
 * @param ignoreSubObject as boolean. if true all subDocuments on object will be considered. default true.
 * @param keyAsStringPath as boolean. if true return key as path separate by dot `object.key`. default false.
 * @returns object with undefined keys
 * @example
 *
 * const user = {
 *    name: "user name",
 *    age: undefined
 * }
 *
 * const result = getUndefinedKeysAsObject(user);
 *
 * console.log(result);
 * > { age: "" }
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
 * const result = getUndefinedKeysAsObject(user, { includesNull: true });
 *
 * console.log(result);
 * > { age: "", isMarried: "" }
 *
 *
 * ...
 */
const getUndefinedKeysAsObject = (params) => {
    let objResult = {};
    const keys = (0, get_undefined_keys_as_array_util_1.default)(params);
    if (keys.length < 1) {
        return objResult;
    }
    const valueToApply = Object.keys(IApplyValue).includes(params.applyKeyValue)
        ? params.applyKeyValue
        : 'empty';
    const keyAsPath = typeof params.keyAsStringPath !== 'undefined'
        ? params.keyAsStringPath
        : false;
    if (!keyAsPath) {
        for (const key of keys) {
            const isSubObject = key.includes('.');
            if (!isSubObject) {
                const undefinedKey = { [key]: ValuesKey[valueToApply] };
                objResult = Object.assign({}, Object.assign({}, objResult), Object.assign({}, undefinedKey));
            }
            else {
                const subKeys = key.split('.');
                const subObjectKeys = getUndefinedKeysAsObject(Object.assign(Object.assign({}, params), { object: params.object[subKeys[0]] }));
                const subObj = { [subKeys[0]]: Object.assign({}, subObjectKeys) };
                objResult = Object.assign({}, Object.assign({}, objResult), Object.assign({}, subObj));
            }
        }
    }
    else {
        for (const key of keys) {
            objResult = Object.assign({}, Object.assign({}, objResult), { [key]: ValuesKey[valueToApply] });
        }
    }
    return objResult;
};
exports.getUndefinedKeysAsObject = getUndefinedKeysAsObject;
exports.default = getUndefinedKeysAsObject;
