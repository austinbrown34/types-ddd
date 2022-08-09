"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordValueObject = void 0;
const core_1 = require("../core");
const core_2 = require("../core");
const bcryptjs_1 = require("bcryptjs");
const password_generator_util_1 = __importDefault(require("./password-generator.util"));
const regexHash = /^\$2a\$10\$.{53}$/;
class PasswordValueObject extends core_1.ValueObject {
    constructor(props) {
        super(props);
    }
    /**
     * @returns value as string
     */
    value() {
        return this.props.value;
    }
    /**
     *
     * @description compare plainText with encrypted password
     * @param plainText plainText not encrypted to compare with encrypted password
     * @returns true if match else false
     */
    compare(plainText) {
        if (this.isEncrypted()) {
            return (0, bcryptjs_1.compareSync)(plainText, this.props.value);
        }
        return plainText === this.props.value;
    }
    /**
     *
     * @returns true if instance value is encrypted else false
     */
    isEncrypted() {
        return this.validator.string(this.props.value).match(regexHash);
    }
    /**
     *
     * @returns true if provided value is encrypted else false
     */
    static isEncrypted(value) {
        return this.validator.string(value).match(regexHash);
    }
    /**
     *
     * @param length password length as number 8/10/12/14/16/18
     * @returns PasswordValueObject
     * @default 12 chars or greater is recommended for strongest password
     */
    static random(length) {
        const pass = (0, password_generator_util_1.default)(length !== null && length !== void 0 ? length : 12);
        return PasswordValueObject.create(pass).value();
    }
    /**
     * @summary this function check if value already is encrypted. If already encrypted just returns instance.
     * @description encrypt instance value
     * @returns instance
     */
    encrypt() {
        const isEncrypted = this.isEncrypted();
        if (isEncrypted) {
            return this;
        }
        const salt = (0, bcryptjs_1.genSaltSync)();
        this.props.value = (0, bcryptjs_1.hashSync)(this.props.value, salt);
        return this;
    }
    validation(_key, _value) {
        const maxLength = 22;
        const minLength = 4;
        const { string } = this.validator;
        if (!PasswordValueObject.isEncrypted(_value)) {
            const passwordHasRequiredLength = string(_value).hasLengthBetween(minLength, maxLength);
            return passwordHasRequiredLength;
        }
        return true;
    }
    /**
     *
     * @param value check if password has a valid value length
     * @returns true if is all ok or false else not
     */
    static isValidProps(value) {
        const maxLength = 22;
        const minLength = 5;
        const { string } = this.validator;
        if (!PasswordValueObject.isEncrypted(value)) {
            const passwordHasRequiredLength = string(value).hasLengthBetween(minLength, maxLength);
            return passwordHasRequiredLength;
        }
        return true;
    }
    /**
     *
     * @param value password to create
     * @returns Result of PasswordValueObject
     */
    static create(value) {
        if (!PasswordValueObject.isValidProps(value)) {
            return core_2.Result.fail('Password must has min 5 and max 21 chars');
        }
        return core_2.Result.Ok(new PasswordValueObject({ value }));
    }
}
exports.PasswordValueObject = PasswordValueObject;
exports.default = PasswordValueObject;
