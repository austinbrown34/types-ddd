interface Params<T> {
    object: T;
    includesEmptyString?: boolean;
    ignoreSubObject?: boolean;
}
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
export declare const removeUndefinedKeysFromObject: <T = {}>(param: Params<T>) => Partial<T>;
export default removeUndefinedKeysFromObject;
