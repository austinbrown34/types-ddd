"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BirthdayValueObject = void 0;
const core_1 = require("../core");
const core_2 = require("../core");
class BirthdayValueObject extends core_1.ValueObject {
    constructor(prop) {
        super(prop);
        this.ONE_YEAR = 31536000902;
    }
    /**
     * @returns the birthday date
     */
    value() {
        return this.props.value;
    }
    /**
     * @description this method round the age
     * @returns age as number
     */
    getAgeAsYearsOld() {
        const now = new Date().getTime();
        const difference = now - this.props.value.getTime();
        const ageInYears = difference / this.ONE_YEAR;
        return Math.trunc(ageInYears);
    }
    /**
     *
     * @param age as number
     * @returns true if instance value is greater than provided value else return false
     */
    isAgeGreaterThan(age) {
        const yearOld = this.getAgeAsYearsOld();
        return age < yearOld;
    }
    /**
     *
     * @param age as number
     * @returns true if instance value is equal to provided value else return false
     */
    isAgeEqualTo(age) {
        const yearOld = this.getAgeAsYearsOld();
        return age === yearOld;
    }
    /**
     *
     * @param date birthday as Date
     * @returns true if is a valid age for a human
     */
    static isValidValue(date) {
        const now = new Date();
        const isBeforeToday = date < now;
        const hasLessThan121YearsOld = now.getFullYear() - date.getFullYear() < 121;
        return isBeforeToday && hasLessThan121YearsOld;
    }
    static create(value) {
        if (!BirthdayValueObject.isValidValue(value)) {
            return core_2.Result.fail('Invalid age for a human. Must has less than 121 years old and birth not in future');
        }
        return core_2.Result.Ok(new BirthdayValueObject({ value }));
    }
}
exports.BirthdayValueObject = BirthdayValueObject;
exports.default = BirthdayValueObject;
