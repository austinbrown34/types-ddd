"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailValueObject = void 0;
const core_1 = require("../core");
const core_2 = require("../core");
const regexHash = /^\w+-?\.?\w+[0-9]??\@\w+[0-9]?\.\w{1,5}(\.\w{2})?(?!.)/;
class EmailValueObject extends core_1.ValueObject {
    constructor(props) {
        super(props);
    }
    value() {
        return this.props.value.toLowerCase();
    }
    getNick() {
        return this.props.value.slice(0, this.props.value.indexOf('@'));
    }
    getDomain() {
        return this.props.value
            .slice(this.props.value.indexOf('@') + 1)
            .toLowerCase();
    }
    validation(_key, _value) {
        return this.validator.string(_value).match(regexHash);
    }
    static isValidProps(email) {
        const isValidEmail = regexHash.test(email);
        return isValidEmail;
    }
    static create(value) {
        if (!EmailValueObject.isValidProps(value)) {
            return core_2.Result.fail('Invalid email');
        }
        return core_2.Result.Ok(new EmailValueObject({ value }));
    }
}
exports.EmailValueObject = EmailValueObject;
exports.default = EmailValueObject;
