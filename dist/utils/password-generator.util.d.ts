export declare type ILength = 8 | 10 | 12 | 14 | 16 | 18;
/**
 *
 * @param length password length as number 8/10/12/14/16/18
 * @returns string password as plainText
 * @default 14 chars is recommended for strongest password
 */
declare const passwordGenerator: (length: ILength) => string;
export { passwordGenerator };
export default passwordGenerator;
