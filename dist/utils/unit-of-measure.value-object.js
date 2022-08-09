"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitOfMeasureValueObject = exports.UnitsDescription = exports.UnitsOfMeasure = void 0;
const core_1 = require("../core");
const core_2 = require("../core");
var UnitsOfMeasure;
(function (UnitsOfMeasure) {
    UnitsOfMeasure["CM"] = "CM";
    UnitsOfMeasure["MM"] = "MM";
    UnitsOfMeasure["MT"] = "MT";
    UnitsOfMeasure["INCH"] = "INCH";
    UnitsOfMeasure["FOOT"] = "FOOT";
    UnitsOfMeasure["YARD"] = "YARD";
})(UnitsOfMeasure = exports.UnitsOfMeasure || (exports.UnitsOfMeasure = {}));
var UnitsDescription;
(function (UnitsDescription) {
    UnitsDescription["CM"] = "CENTIMETER";
    UnitsDescription["MM"] = "MILLIMETER";
    UnitsDescription["MT"] = "METER";
    UnitsDescription["INCH"] = "INCHES";
    UnitsDescription["FOOT"] = "FOOT";
    UnitsDescription["YARD"] = "YARD";
})(UnitsDescription = exports.UnitsDescription || (exports.UnitsDescription = {}));
class UnitOfMeasureValueObject extends core_1.ValueObject {
    constructor(props) {
        super(props);
    }
    value() {
        return this.props.value;
    }
    get description() {
        return UnitsDescription[this.props.value];
    }
    validation(_key, _value) {
        return _value in UnitsOfMeasure;
    }
    static isValidProps(value) {
        return value in UnitsOfMeasure;
    }
    static create(value) {
        const isValid = UnitOfMeasureValueObject.isValidProps(value);
        if (!isValid) {
            return core_2.Result.fail('Invalid unit of measure value');
        }
        return core_2.Result.Ok(new UnitOfMeasureValueObject({ value }));
    }
}
exports.UnitOfMeasureValueObject = UnitOfMeasureValueObject;
exports.default = UnitOfMeasureValueObject;
