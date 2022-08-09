declare enum IApplyValue {
    empty = "empty",
    null = "null",
    undefined = "undefined",
    zero = "zero",
    one = "one",
    true = "true",
    false = "false"
}
declare type ApplyValue = keyof typeof IApplyValue;
/**
 * @param object Object as target to check keys
 * @param includesNull as boolean. if true all nullable values will be considered as undefined.
 * @param applyKeyValue as value to be applied to key. empty string / null / undefined / zero. default empty string
 * @param ignoreSubObject as boolean. if true all subDocuments on object will be considered. default true.
 */
interface Params<T> {
    object: T;
    includesNull: boolean;
    applyKeyValue?: ApplyValue;
    ignoreSubObject?: boolean;
    keyAsStringPath?: boolean;
}
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
declare const getUndefinedKeysAsObject: <T = {}>(params: Params<T>) => Partial<T>;
export { getUndefinedKeysAsObject };
export default getUndefinedKeysAsObject;
