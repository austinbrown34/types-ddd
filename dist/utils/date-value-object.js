"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateValueObject = void 0;
const core_1 = require("../core");
const core_2 = require("../core");
var DateFormats;
(function (DateFormats) {
    DateFormats["DD-MM-YYYY"] = "DD-MM-YYYY";
    DateFormats["YYYY-DD-MM"] = "YYYY-DD-MM";
    DateFormats["YYYY-MM-DD"] = "YYYY-MM-DD";
    DateFormats["DD-MM-YY"] = "DD-MM-YY";
    DateFormats["YY-DD-MM"] = "YY-DD-MM";
    DateFormats["YY-MM-DD"] = "YY-MM-DD";
    DateFormats["DD-MM-YYYY HH:MM:SS"] = "DD-MM-YYYY HH:MM:SS";
    DateFormats["YYYY-DD-MM HH:MM:SS"] = "YYYY-DD-MM HH:MM:SS";
    DateFormats["YYYY-MM-DD HH:MM:SS"] = "YYYY-MM-DD HH:MM:SS";
    DateFormats["DD-MM-YY HH:MM:SS"] = "DD-MM-YY HH:MM:SS";
    DateFormats["YY-DD-MM HH:MM:SS"] = "YY-DD-MM";
    DateFormats["YY-MM-DD HH:MM:SS"] = "YY-MM-DD HH:MM:SS";
    DateFormats["DD/MM/YYYY"] = "DD/MM/YYYY";
    DateFormats["YYYY/DD/MM"] = "YYYY/DD/MM";
    DateFormats["YYYY/MM/DD"] = "YYYY/MM/DD";
    DateFormats["DD/MM/YY"] = "DD/MM/YY";
    DateFormats["YY/DD/MM"] = "YY/DD/MM";
    DateFormats["YY/MM/DD"] = "YY/MM/DD";
    DateFormats["DD/MM/YYYY HH:MM:SS"] = "DD/MM/YYYY HH:MM:SS";
    DateFormats["YYYY/DD/MM HH:MM:SS"] = "YYYY/DD/MM HH:MM:SS";
    DateFormats["YYYY/MM/DD HH:MM:SS"] = "YYYY/MM/DD HH:MM:SS";
    DateFormats["DD/MM/YY HH:MM:SS"] = "DD/MM/YY HH:MM:SS";
    DateFormats["YY/DD/MM HH:MM:SS"] = "YY/DD/MM";
    DateFormats["YY/MM/DD HH:MM:SS"] = "YY/MM/DD HH:MM:SS";
})(DateFormats || (DateFormats = {}));
class DateValueObject extends core_2.ValueObject {
    constructor(props) {
        super(props);
        this.ONE_DAY = 86400000;
        this.ONE_HOUR = 3600000;
        this.ONE_MINUTE = 60000;
        this.ONE_MONTH = 2678400000;
        this.ONE_WEEK = 604800000;
        this.ONE_YEAR = 31622400000;
    }
    /**
     * @returns instance value as Date
     */
    value() {
        return this.props.value;
    }
    /**
     *
     * @param days to be added
     * @returns instance DateValueObject with updated value
     */
    addDays(days) {
        const daysInTime = days * this.ONE_DAY;
        const currentTime = this.props.value.getTime();
        this.props.value.setTime(currentTime + daysInTime);
        return this;
    }
    /**
     *
     * @param months to be added
     * @returns instance DateValueObject with updated value
     */
    addMonths(months) {
        const monthsInTime = months * this.ONE_MONTH;
        const currentTime = this.props.value.getTime();
        this.props.value.setTime(currentTime + monthsInTime);
        return this;
    }
    /**
     *
     * @param hours to be added
     * @returns instance DateValueObject with updated value
     */
    addHours(hours) {
        const hoursInTime = hours * this.ONE_HOUR;
        const currentTime = this.props.value.getTime();
        this.props.value.setTime(currentTime + hoursInTime);
        return this;
    }
    /**
     *
     * @param minutes to be added
     * @returns instance DateValueObject with updated value
     */
    addMinutes(minutes) {
        const minutesInTime = minutes * this.ONE_MINUTE;
        const currentTime = this.props.value.getTime();
        this.props.value.setTime(currentTime + minutesInTime);
        return this;
    }
    /**
     *
     * @param weeks to be added
     * @returns instance DateValueObject with updated value
     */
    addWeeks(weeks) {
        const weeksInTime = weeks * this.ONE_WEEK;
        const currentTime = this.props.value.getTime();
        this.props.value.setTime(currentTime + weeksInTime);
        return this;
    }
    /**
     *
     * @param years to be added
     * @returns instance DateValueObject with updated value
     */
    addYears(years) {
        const yearsInTime = years * this.ONE_YEAR;
        const currentTime = this.props.value.getTime();
        this.props.value.setTime(currentTime + yearsInTime);
        return this;
    }
    /**
     *
     * @param days to be subtracted
     * @returns instance DateValueObject with updated value
     */
    subtractDays(days) {
        const daysInTime = days * this.ONE_DAY;
        const currentTime = this.props.value.getTime();
        this.props.value.setTime(currentTime - daysInTime);
        return this;
    }
    /**
     *
     * @param months to be subtracted
     * @returns instance DateValueObject with updated value
     */
    subtractMonths(months) {
        const monthsInTime = months * this.ONE_MONTH;
        const currentTime = this.props.value.getTime();
        this.props.value.setTime(currentTime - monthsInTime);
        return this;
    }
    /**
     *
     * @param hours to be subtracted
     * @returns instance DateValueObject with updated value
     */
    subtractHours(hours) {
        const hoursInTime = hours * this.ONE_HOUR;
        const currentTime = this.props.value.getTime();
        this.props.value.setTime(currentTime - hoursInTime);
        return this;
    }
    /**
     *
     * @param minutes to be subtracted
     * @returns instance DateValueObject with updated value
     */
    subtractMinutes(minutes) {
        const minutesInTime = minutes * this.ONE_MINUTE;
        const currentTime = this.props.value.getTime();
        this.props.value.setTime(currentTime - minutesInTime);
        return this;
    }
    /**
     *
     * @param weeks to be subtracted
     * @returns instance DateValueObject with updated value
     */
    subtractWeeks(weeks) {
        const weeksInTime = weeks * this.ONE_WEEK;
        const currentTime = this.props.value.getTime();
        this.props.value.setTime(currentTime - weeksInTime);
        return this;
    }
    /**
     *
     * @param years to be subtracted
     * @returns instance DateValueObject with updated value
     */
    subtractYears(years) {
        const yearsInTime = years * this.ONE_YEAR;
        const currentTime = this.props.value.getTime();
        this.props.value.setTime(currentTime - yearsInTime);
        return this;
    }
    /**
     *
     * @param date to be compared
     * @returns result as number
     * @summary returns positive result if instance value is greater than provided value
     */
    differenceInDays(date) {
        const currentDays = this.props.value.getTime() / this.ONE_DAY;
        const dateTime = date.getTime() / this.ONE_DAY;
        const calc = (currentDays * 100 - dateTime * 100) / 100;
        return parseFloat(calc.toFixed(2));
    }
    /**
     *
     * @param date to be compared
     * @returns result as number
     * @summary returns positive result if instance value is greater than provided value
     */
    differenceInHours(date) {
        const currentDays = this.props.value.getTime() / this.ONE_HOUR;
        const dateTime = date.getTime() / this.ONE_HOUR;
        const calc = (currentDays * 100 - dateTime * 100) / 100;
        return parseFloat(calc.toFixed(2));
    }
    /**
     *
     * @param date to be compared
     * @returns result as number
     * @summary returns positive result if instance value is greater than provided value
     */
    differenceInMinutes(date) {
        const currentDays = this.props.value.getTime() / this.ONE_MINUTE;
        const dateTime = date.getTime() / this.ONE_MINUTE;
        const calc = (currentDays * 100 - dateTime * 100) / 100;
        return parseFloat(calc.toFixed(2));
    }
    /**
     *
     * @param date to be compared
     * @returns result as number
     * @summary returns positive result if instance value is greater than provided value
     */
    differenceInMonths(date) {
        const currentDays = this.props.value.getTime() / this.ONE_MONTH;
        const dateTime = date.getTime() / this.ONE_MONTH;
        const calc = (currentDays * 100 - dateTime * 100) / 100;
        return parseFloat(calc.toFixed(2));
    }
    /**
     *
     * @param date to be compared
     * @returns result as number
     * @summary returns positive result if instance value is greater than provided value
     */
    differenceInYears(date) {
        const currentDays = this.props.value.getTime() / this.ONE_YEAR;
        const dateTime = date.getTime() / this.ONE_YEAR;
        const calc = (currentDays * 100 - dateTime * 100) / 100;
        return parseFloat(calc.toFixed(2));
    }
    /**
     *
     * @param date to be compared
     * @returns result as number
     * @summary returns positive result if instance value is greater than provided value
     */
    differenceInWeeks(date) {
        const currentDays = this.props.value.getTime() / this.ONE_WEEK;
        const dateTime = date.getTime() / this.ONE_WEEK;
        const calc = (currentDays * 100 - dateTime * 100) / 100;
        return parseFloat(calc.toFixed(2));
    }
    addZero(value) {
        return value < 10 ? `0${value}` : `${value}`;
    }
    /**
     *
     * @param format pattern to be applied
     * @returns formatted date as string
     */
    format(format) {
        const date = this.addZero(this.props.value.getDate());
        const fullYear = this.props.value.getFullYear().toString();
        const month = this.addZero(this.props.value.getMonth() + 1);
        const hours = this.addZero(this.props.value.getHours());
        const minutes = this.addZero(this.props.value.getMinutes());
        const sec = this.addZero(this.props.value.getSeconds());
        if (format === 'DD-MM-YY') {
            return `${date}-${month}-${fullYear.slice(2)}`;
        }
        else if (format === 'DD-MM-YY HH:MM:SS') {
            return `${date}-${month}-${fullYear.slice(2)} ${hours}:${minutes}:${sec}`;
        }
        else if (format === 'DD-MM-YYYY') {
            return `${date}-${month}-${fullYear}`;
        }
        else if (format === 'DD-MM-YYYY HH:MM:SS') {
            return `${date}-${month}-${fullYear} ${hours}:${minutes}:${sec}`;
        }
        else if (format === 'YY-DD-MM') {
            return `${fullYear.slice(2)}-${date}-${month}`;
        }
        else if (format === 'YY-DD-MM HH:MM:SS') {
            return `${fullYear.slice(2)}-${date}-${month} ${hours}:${minutes}:${sec}`;
        }
        else if (format === 'YY-MM-DD') {
            return `${fullYear.slice(2)}-${date}-${month}`;
        }
        else if (format === 'YY-MM-DD HH:MM:SS') {
            return `${fullYear.slice(2)}-${date}-${month} ${hours}:${minutes}:${sec}`;
        }
        else if (format === 'YYYY-DD-MM HH:MM:SS') {
            return `${fullYear}-${date}-${month} ${hours}:${minutes}:${sec}`;
        }
        else if (format === 'YYYY-MM-DD') {
            return `${fullYear}-${month}-${date}`;
        }
        else if (format === 'YYYY-DD-MM') {
            return `${fullYear}-${date}-${month}`;
        }
        else if (format === 'DD/MM/YY') {
            return `${date}/${month}/${fullYear.slice(2)}`;
        }
        else if (format === 'DD/MM/YY HH:MM:SS') {
            return `${date}/${month}/${fullYear.slice(2)} ${hours}:${minutes}:${sec}`;
        }
        else if (format === 'DD/MM/YYYY') {
            return `${date}/${month}/${fullYear}`;
        }
        else if (format === 'DD/MM/YYYY HH:MM:SS') {
            return `${date}/${month}/${fullYear} ${hours}:${minutes}:${sec}`;
        }
        else if (format === 'YY/DD/MM') {
            return `${fullYear.slice(2)}/${date}/${month}`;
        }
        else if (format === 'YY/DD/MM HH:MM:SS') {
            return `${fullYear.slice(2)}/${date}/${month} ${hours}:${minutes}:${sec}`;
        }
        else if (format === 'YY/MM/DD') {
            return `${fullYear.slice(2)}/${date}/${month}`;
        }
        else if (format === 'YY/MM/DD HH:MM:SS') {
            return `${fullYear.slice(2)}/${date}/${month} ${hours}:${minutes}:${sec}`;
        }
        else if (format === 'YYYY/DD/MM HH:MM:SS') {
            return `${fullYear}/${date}/${month} ${hours}:${minutes}:${sec}`;
        }
        else if (format === 'YYYY/MM/DD') {
            return `${fullYear}/${month}/${date}`;
        }
        else if (format === 'YYYY/DD/MM') {
            return `${fullYear}/${date}/${month}`;
        }
        else if (format === 'YYYY/MM/DD HH:MM:SS') {
            return `${fullYear}/${month}/${date} ${hours}:${minutes}:${sec}`;
        }
        return `${fullYear}-${month}-${date} ${hours}:${minutes}:${sec}`;
    }
    static isValidProps(value) {
        return this.validator.isDate(value);
    }
    /**
     *
     * @param date optional value as date.
     * If provide It will be checked, If It not be provided instance value will be considered
     * @returns true if date day is week day [Monday-Friday]
     */
    isWeekday(date) {
        var _a;
        const day = (_a = date === null || date === void 0 ? void 0 : date.getDay()) !== null && _a !== void 0 ? _a : this.props.value.getDay();
        return day > 0 && day < 6;
    }
    /**
     *
     * @param date optional value as date.
     * If provide It will be checked, If It not be provided instance value will be considered
     * @returns true if date day is weekend day [Sat-Sunday]
     */
    isWeekend(date) {
        var _a;
        const day = (_a = date === null || date === void 0 ? void 0 : date.getDay()) !== null && _a !== void 0 ? _a : this.props.value.getDay();
        return day === 6 || day === 0;
    }
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
    isAfter(date) {
        const time = date.getTime();
        const instanceTime = this.props.value.getTime();
        return instanceTime > time;
    }
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
    isBefore(date) {
        const time = date.getTime();
        const instanceTime = this.props.value.getTime();
        return instanceTime < time;
    }
    validation(_key, _value) {
        return this.validator.isDate(_value);
    }
    /**
     *
     * @param date as Date
     * @returns true or false. True if instance date is equal to provided value
     */
    isEqual(date) {
        const time = date.getTime();
        const instanceTime = this.props.value.getTime();
        return instanceTime === time;
    }
    static create(date) {
        const value = date !== null && date !== void 0 ? date : new Date();
        const isValid = DateValueObject.isValidProps(value);
        if (!isValid) {
            return core_1.Result.fail('Invalid Date Value');
        }
        return core_1.Result.Ok(new DateValueObject({ value }));
    }
}
exports.DateValueObject = DateValueObject;
