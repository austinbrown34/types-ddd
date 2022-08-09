"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserNameValueObject = void 0;
const core_1 = require("../core");
const core_2 = require("../core");
class UserNameValueObject extends core_1.ValueObject {
    constructor(props) {
        super(props);
        this.capitalize();
    }
    /**
     * @returns capitalized full name
     */
    value() {
        return this.props.value;
    }
    /**
     *
     * @returns instance
     */
    capitalize() {
        const names = this.props.value.split(' ');
        const capitalized = [];
        for (const name of names) {
            const lowerCaseName = name[0].toUpperCase() + name.slice(1).toLowerCase();
            capitalized.push(lowerCaseName);
        }
        this.props.value = capitalized.toString().replace(/,/g, ' ');
        return this;
    }
    /**
     *
     * @returns check if has a second name
     */
    hasMiddleName() {
        return this.props.value.split(' ').length > 2;
    }
    /**
     *
     * @returns check if has last name `first middle last`
     */
    hasLastName() {
        return this.props.value.split(' ').length >= 2;
    }
    /**
     *
     * @returns first name
     */
    getFirstName() {
        return this.props.value.split(' ')[0];
    }
    /**
     *
     * @returns middle name if it has more than 2 names, else returns a empty string
     */
    getMiddleName() {
        if (!this.hasMiddleName()) {
            return '';
        }
        return this.props.value.split(' ')[1];
    }
    /**
     *
     * @returns last name if exists else return the name
     */
    getLastName() {
        const names = this.props.value.split(' ');
        return names[names.length - 1];
    }
    /**
     * @returns initials as string
     * @example
     * for a name "Thomas A. Anderson" = "T.A.A"
     */
    getInitials() {
        const names = this.props.value.split(' ');
        const letters = names.map((name) => name[0]);
        const initials = letters.toString().replace(/,/g, '.');
        return initials;
    }
    validation(_key, _value) {
        const maxLength = 41;
        const minLength = 1;
        const { string } = this.validator;
        return string(_value).hasLengthBetween(minLength, maxLength);
    }
    /**
     * @description check name length min(2) max(40)
     * @param value name as string
     * @returns true if provided value is valid and false if not
     */
    static isValidProps(value) {
        const maxLength = 41;
        const minLength = 2;
        const { string } = this.validator;
        return string(value).hasLengthBetween(minLength, maxLength);
    }
    static create(value) {
        const isValidValue = UserNameValueObject.isValidProps(value);
        if (!isValidValue) {
            return core_2.Result.fail('Invalid name length. Must has min 2 and max 40 chars');
        }
        return core_2.Result.Ok(new UserNameValueObject({ value }));
    }
}
exports.UserNameValueObject = UserNameValueObject;
exports.default = UserNameValueObject;
