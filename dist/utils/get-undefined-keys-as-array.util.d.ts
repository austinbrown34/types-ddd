interface Params {
    object: Object;
    includesNull: boolean;
    ignoreSubObject?: boolean;
}
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
declare const getUndefinedKeysAsArray: (params: Params) => string[];
export { getUndefinedKeysAsArray };
export default getUndefinedKeysAsArray;
