import { Result } from '../core';
import { ValueObject } from '../core';
declare enum DateFormats {
    'DD-MM-YYYY' = "DD-MM-YYYY",
    'YYYY-DD-MM' = "YYYY-DD-MM",
    'YYYY-MM-DD' = "YYYY-MM-DD",
    'DD-MM-YY' = "DD-MM-YY",
    'YY-DD-MM' = "YY-DD-MM",
    'YY-MM-DD' = "YY-MM-DD",
    'DD-MM-YYYY HH:MM:SS' = "DD-MM-YYYY HH:MM:SS",
    'YYYY-DD-MM HH:MM:SS' = "YYYY-DD-MM HH:MM:SS",
    'YYYY-MM-DD HH:MM:SS' = "YYYY-MM-DD HH:MM:SS",
    'DD-MM-YY HH:MM:SS' = "DD-MM-YY HH:MM:SS",
    'YY-DD-MM HH:MM:SS' = "YY-DD-MM",
    'YY-MM-DD HH:MM:SS' = "YY-MM-DD HH:MM:SS",
    'DD/MM/YYYY' = "DD/MM/YYYY",
    'YYYY/DD/MM' = "YYYY/DD/MM",
    'YYYY/MM/DD' = "YYYY/MM/DD",
    'DD/MM/YY' = "DD/MM/YY",
    'YY/DD/MM' = "YY/DD/MM",
    'YY/MM/DD' = "YY/MM/DD",
    'DD/MM/YYYY HH:MM:SS' = "DD/MM/YYYY HH:MM:SS",
    'YYYY/DD/MM HH:MM:SS' = "YYYY/DD/MM HH:MM:SS",
    'YYYY/MM/DD HH:MM:SS' = "YYYY/MM/DD HH:MM:SS",
    'DD/MM/YY HH:MM:SS' = "DD/MM/YY HH:MM:SS",
    'YY/DD/MM HH:MM:SS' = "YY/DD/MM",
    'YY/MM/DD HH:MM:SS' = "YY/MM/DD HH:MM:SS"
}
declare type DateFormat = keyof typeof DateFormats;
interface Prop {
    value: Date;
}
export declare class DateValueObject extends ValueObject<Prop> {
    private readonly ONE_DAY;
    private readonly ONE_HOUR;
    private readonly ONE_MINUTE;
    private readonly ONE_MONTH;
    private readonly ONE_WEEK;
    private readonly ONE_YEAR;
    private constructor();
    /**
     * @returns instance value as Date
     */
    value(): Date;
    /**
     *
     * @param days to be added
     * @returns instance DateValueObject with updated value
     */
    addDays(days: number): DateValueObject;
    /**
     *
     * @param months to be added
     * @returns instance DateValueObject with updated value
     */
    addMonths(months: number): DateValueObject;
    /**
     *
     * @param hours to be added
     * @returns instance DateValueObject with updated value
     */
    addHours(hours: number): DateValueObject;
    /**
     *
     * @param minutes to be added
     * @returns instance DateValueObject with updated value
     */
    addMinutes(minutes: number): DateValueObject;
    /**
     *
     * @param weeks to be added
     * @returns instance DateValueObject with updated value
     */
    addWeeks(weeks: number): DateValueObject;
    /**
     *
     * @param years to be added
     * @returns instance DateValueObject with updated value
     */
    addYears(years: number): DateValueObject;
    /**
     *
     * @param days to be subtracted
     * @returns instance DateValueObject with updated value
     */
    subtractDays(days: number): DateValueObject;
    /**
     *
     * @param months to be subtracted
     * @returns instance DateValueObject with updated value
     */
    subtractMonths(months: number): DateValueObject;
    /**
     *
     * @param hours to be subtracted
     * @returns instance DateValueObject with updated value
     */
    subtractHours(hours: number): DateValueObject;
    /**
     *
     * @param minutes to be subtracted
     * @returns instance DateValueObject with updated value
     */
    subtractMinutes(minutes: number): DateValueObject;
    /**
     *
     * @param weeks to be subtracted
     * @returns instance DateValueObject with updated value
     */
    subtractWeeks(weeks: number): DateValueObject;
    /**
     *
     * @param years to be subtracted
     * @returns instance DateValueObject with updated value
     */
    subtractYears(years: number): DateValueObject;
    /**
     *
     * @param date to be compared
     * @returns result as number
     * @summary returns positive result if instance value is greater than provided value
     */
    differenceInDays(date: Date): number;
    /**
     *
     * @param date to be compared
     * @returns result as number
     * @summary returns positive result if instance value is greater than provided value
     */
    differenceInHours(date: Date): number;
    /**
     *
     * @param date to be compared
     * @returns result as number
     * @summary returns positive result if instance value is greater than provided value
     */
    differenceInMinutes(date: Date): number;
    /**
     *
     * @param date to be compared
     * @returns result as number
     * @summary returns positive result if instance value is greater than provided value
     */
    differenceInMonths(date: Date): number;
    /**
     *
     * @param date to be compared
     * @returns result as number
     * @summary returns positive result if instance value is greater than provided value
     */
    differenceInYears(date: Date): number;
    /**
     *
     * @param date to be compared
     * @returns result as number
     * @summary returns positive result if instance value is greater than provided value
     */
    differenceInWeeks(date: Date): number;
    private addZero;
    /**
     *
     * @param format pattern to be applied
     * @returns formatted date as string
     */
    format(format: DateFormat): string;
    static isValidProps(value: Date): boolean;
    /**
     *
     * @param date optional value as date.
     * If provide It will be checked, If It not be provided instance value will be considered
     * @returns true if date day is week day [Monday-Friday]
     */
    isWeekday(date?: Date): boolean;
    /**
     *
     * @param date optional value as date.
     * If provide It will be checked, If It not be provided instance value will be considered
     * @returns true if date day is weekend day [Sat-Sunday]
     */
    isWeekend(date?: Date): boolean;
    /**
     *
     * @param date as Date
     * @returns true or false. True if instance date is greater than provided value
     * @example
     *
     * const date = new Date("1989-05-31 11:42:00");
     *
     * const valueObj = DateValueObject.create(date).value();
     *
     * const isAfter = valueObj.isAfter(new Date());
     *
     * console.log(isAfter);
     *
     * > false
     *
     * ...
     */
    isAfter(date: Date): boolean;
    /**
     *
     * @param date as Date
     * @returns true or false. True if instance date is less than provided value
     * @example
     *
     * const date = new Date("1989-05-31 11:42:00");
     *
     * const valueObj = DateValueObject.create(date).value();
     *
     * const isBefore = valueObj.isBefore(new Date());
     *
     * console.log(isBefore);
     *
     * > true
     *
     * ...
     */
    isBefore(date: Date): boolean;
    validation(_key: any, _value: any): boolean;
    /**
     *
     * @param date as Date
     * @returns true or false. True if instance date is equal to provided value
     */
    isEqual(date: Date): boolean;
    static create(date?: Date): Result<DateValueObject>;
}
export {};
