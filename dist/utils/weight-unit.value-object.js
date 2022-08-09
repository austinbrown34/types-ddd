"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightUnitValueObject = exports.UnitsOfWeightDescription = exports.UnitsOfWeight = void 0;
const core_1 = require("../core");
const core_2 = require("../core");
var UnitsOfWeight;
(function (UnitsOfWeight) {
    UnitsOfWeight["KG"] = "KG";
    UnitsOfWeight["G"] = "G";
    UnitsOfWeight["MG"] = "MG";
    UnitsOfWeight["TON"] = "TON";
    UnitsOfWeight["LB"] = "LB";
    UnitsOfWeight["OZ"] = "OZ";
})(UnitsOfWeight = exports.UnitsOfWeight || (exports.UnitsOfWeight = {}));
var UnitsOfWeightDescription;
(function (UnitsOfWeightDescription) {
    UnitsOfWeightDescription["KG"] = "KILOGRAM";
    UnitsOfWeightDescription["G"] = "GRAM";
    UnitsOfWeightDescription["MG"] = "MILLIGRAM";
    UnitsOfWeightDescription["TON"] = "TONNE";
    UnitsOfWeightDescription["LB"] = "POUND";
    UnitsOfWeightDescription["OZ"] = "OUNCE";
})(UnitsOfWeightDescription = exports.UnitsOfWeightDescription || (exports.UnitsOfWeightDescription = {}));
class WeightUnitValueObject extends core_1.ValueObject {
    constructor(props) {
        super(props);
    }
    value() {
        return this.props.value;
    }
    get description() {
        return UnitsOfWeightDescription[this.props.value];
    }
    validation(_key, _value) {
        return _value in UnitsOfWeight;
    }
    static isValidProps(value) {
        return value in UnitsOfWeight;
    }
    static create(value) {
        const isValid = WeightUnitValueObject.isValidProps(value);
        if (!isValid) {
            return core_2.Result.fail('Invalid weight unit value');
        }
        return core_2.Result.Ok(new WeightUnitValueObject({ value }));
    }
}
exports.WeightUnitValueObject = WeightUnitValueObject;
exports.default = WeightUnitValueObject;
